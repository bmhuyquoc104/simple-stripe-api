import React from "react";
import {
  AppBar,
  Stack,
  Button,
  Avatar,
  Toolbar,
  Typography,
  IconButton,
  styled,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { NavLink } from "react-router-dom";
import { imageResources } from "../public/imageResources";

const StyledTypo = styled(Typography)`
  & > a {
    text-decoration: none;
    color: black;
  }
  & > .active {
    color: red;
  }
  
` as typeof Typography;

function Header() {
  return (
    <AppBar sx={{ backgroundColor: "transparent" }} position="static">
      <Toolbar disableGutters>
        <Stack
          sx={{ width: "100%" }}
          direction="row"
          padding={2}
          justifyContent="space-between"
          alignItems="center"
        >
          <Stack direction="row" spacing={3}>
            <StyledTypo
              variant="h6"
              component="h2"
            >
              <NavLink to="/">Home</NavLink>
            </StyledTypo>
            <StyledTypo
              variant="h6"
              component="h2"
            >
              <NavLink to="/customers">Customers</NavLink>
            </StyledTypo>
            <StyledTypo
              variant="h6"
              component="h2"
            >
              <NavLink to="/subscriptions">Subscriptions</NavLink>
            </StyledTypo>
            <StyledTypo
              variant="h6"
              component="h2"
            >
              <NavLink to="/payments">Payments</NavLink>
            </StyledTypo>
            <StyledTypo variant="h6" component="h2">
              <NavLink to="/checkout">
                {" "}
                <span>
                  <ShoppingCartIcon />
                </span>
                Checkout
              </NavLink>
            </StyledTypo>
          </Stack>

          <IconButton>
            <Avatar alt="user avatar" src={imageResources.Avatar} />
          </IconButton>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
