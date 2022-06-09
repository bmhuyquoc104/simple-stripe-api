// Import config to use variable in dotenv file
import { config } from "dotenv";

if (process.env.NODE_ENV !== "production") {
  config();
}

// Import libraries
import express, { Response, Request } from "express";
import cors from "cors";
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Import Stripe from stripe library
import Stripe from "stripe";
export const stripe = new Stripe(process.env.STRIPE_SECRET, {
  apiVersion: "2020-08-27",
});

const PORT = process.env.PORT || 8000;

app.get("/", (req: Request, res: Response) => {
  res.status(200).send("This is backend");
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});

import api from "./api";
app.use("/api", api);
