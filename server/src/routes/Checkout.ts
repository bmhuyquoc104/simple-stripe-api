import express from "express";
import { checkOutSession } from "../controllers/Checkout";
const router = express.Router();
router.route("/").post(checkOutSession);

export default router;
