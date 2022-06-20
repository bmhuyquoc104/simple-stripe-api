import { useState, useEffect } from "react";
import {
  Grid,
  Stack,
  Card,
  Typography,
  CardMedia,
  CardActions,
  IconButton,
  CardContent,
} from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
function Home() {
  const [products, setProducts] = useState<any>([]);

  useEffect(() => {
    async function getData() {
      const response = await fetch(`https://fakestoreapi.com/products`);

      let actualData = await response.json();
      actualData.map((element: any) => {
        element.quantity = 0;
      });
      setProducts(actualData);
    }
    getData();
  }, []);

  const changeQuantity = (value: number, index: number, e: any) => {
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

  return (
    <Grid container spacing={4}>
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
              <IconButton onClick={(e) => changeQuantity(1, product.id, e)}>
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
  );
}

export default Home;
