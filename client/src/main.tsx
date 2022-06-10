import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(
  "pk_test_51L8kmaIIdcTTicIUQvg9AfOh8nRJHYCm7CTTj9M7YOSKnh6GkMljnq0Oaof565ZkYpmbYbhJ29A1kJXhoLsONptJ00xsZWCS9B"
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Elements stripe={stripePromise}>
        <App />
      </Elements>
    </BrowserRouter>
  </React.StrictMode>
);
