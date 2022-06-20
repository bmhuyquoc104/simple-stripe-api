import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Checkout from "./pages/Checkout";
import CheckoutFail from "./pages/CheckoutFail";
import CheckoutSuccess from "./pages/CheckoutSuccess";
import Customers from "./pages/Customers";
import Home from "./pages/Home";
import NotFoundPages from "./pages/NotFoundPages";
import Payments from "./pages/Payments";
import Subscriptions from "./pages/Subscriptions";
import Header from "./components/Header";
import { Stack } from "@mui/material";
function App() {
  return (
    <div className="App">
      <Stack spacing={4}>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/subscriptions" element={<Subscriptions />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/success" element={<CheckoutSuccess />} />
          <Route path="/failed" element={<CheckoutFail />} />
          <Route path="/payments" element={<Payments />} />
          <Route path="*" element={<NotFoundPages />} />
        </Routes>
      </Stack>
    </div>
  );
}

export default App;
