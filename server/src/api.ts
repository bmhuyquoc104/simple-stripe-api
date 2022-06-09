import express, { Response, Request } from "express";
export const router = express.Router();
router.route("/testApi").post((req: Request, res: Response) => {
  const { amount } = req.body;
  if (amount == null) {
    res.status(404).send("Please enter amount");
  } else {
    res.status(200).send({ with_tax: amount * 10 });
  }
});

export default router;
