import { useState, useEffect } from "react";
import {
  Grid,
  Stack,
  Card,
  Typography,
  CardMedia,
  CardActions,
  IconButton,
  Button,
  CardContent,
} from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import { useStripe } from "@stripe/react-stripe-js";
function Home() {
  const [products, setProducts] = useState<any>([]);
  const [cart, setCart] = useState<any>([]);
  const stripe = useStripe();
  useEffect(() => {
    async function getData() {
      const response = await fetch(`https://fakestoreapi.com/products`);

      let actualData = await response.json();
      actualData.map((element: any) => {
        element.quantity = 0;
        element.currency = "usd";
      });
      setProducts(actualData);
    }
    getData();
  }, []);

  const changeQuantity = async (value: number, index: number, e: any) => {
    setProducts(
      products.map((product: any) => {
        if (product.id === index) {
          return {
            ...product,
            quantity: Math.max(0, product.quantity + value),
          };
        }
        return { ...product };
      })
    );
  };

  async function fetchFromApi(opts: any) {
    const { method, body }:any = { method: "POST", body: null, ...opts };

    const res = await fetch("http://localhost:3333/checkout", {
      method,
      ...(body && { body: JSON.stringify(body) }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    return res.json();
  }

  const addCart = async (e: any) => {
    e.preventDefault();
    const product = products.filter((element: any) => element.quantity > 0);
    product.map((e: any) => {
      e.amount = e.price * 100;
      e.name = e.title;
      delete e.image;
      delete e.title;
      delete e.price;
      delete e.rating;
      delete e.category;
      delete e.id;
    });
    console.log(product);
    // if (cart.includes(product)) return;
    // setCart(product);
    const body = { line_items: product };
    console.log(cart);
    const { id: sessionId } = await fetchFromApi({
      body,
    });
    const { error }:any = await stripe?.redirectToCheckout({
      sessionId,
    });
    if (error) {
      console.log(error);
    }
  };

  return (
    <Stack direction="row" spacing={2}>
      <Grid
        justifyContent="space-evenly"
        sx={{ flexGrow: 1 }}
        container
        spacing={4}
      >
        {products?.map((product: any) => (
          <Grid key={product.id} item>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                sx={{ objectFit: "contain" }}
                height="200"
                alt={`product-${product.id}-logo`}
                image={product.image}
              />
              <CardContent>
                <Stack direction="column" spacing={2}>
                  <Typography>{product.title}</Typography>
                  <Typography variant="h6" sx={{ color: "red" }}>
                    {product.price}
                  </Typography>
                  <Typography sx={{ maxHeight: 120, overflowY: "scroll" }}>
                    {product.description}
                  </Typography>
                </Stack>
              </CardContent>
              <CardActions>
                <IconButton
                  onClick={(e) => {
                    changeQuantity(1, product.id, e);
                  }}
                >
                  <AddCircleIcon />
                </IconButton>
                <Typography>{product?.quantity}</Typography>
                <IconButton onClick={(e) => changeQuantity(-1, product.id, e)}>
                  <RemoveCircleIcon />
                </IconButton>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Button
        sx={{ width: "300px", alignSelf: "start" }}
        variant="contained"
        color="error"
        size="large"
        onClick={addCart}
      >
        Check Out
      </Button>
    </Stack>
  );
}

export default Home;
