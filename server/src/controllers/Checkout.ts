import Stripe from "stripe";
import { Response, Request } from "express";
import { stripe } from "../server";
const createStripeCheckOutSession = async (
  line_items: Stripe.Checkout.SessionCreateParams.LineItem[]
) => {
  const url = process.env.WEB_URL;
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items,
    success_url: `${url}/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${url}/failed`,
  });

  return session;
};

const checkOutSession = async (req: Request, res: Response) => {
  try {
    const checkOut = await createStripeCheckOutSession(req.body.line_items);
    console.log(checkOut);
    if (checkOut === null) {
      res.status(404).send("Please enter the item you want to check out");
    } else {
      res.status(200).send(checkOut);
    }
  } catch (error) {
    res.status(500).send("Internal error");
  }
};



export { createStripeCheckOutSession, checkOutSession };
