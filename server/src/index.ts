// Import config to use variable in dotenv file
import { config } from "dotenv";

if (process.env.NODE_ENV !== "production") {
  config();
}

// Import Stripe from stripe library
import Stripe from "stripe";
export const stripe = new Stripe(process.env.STRIPE_SECRET, {
  apiVersion: "2020-08-27",
});
