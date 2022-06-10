"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Checkout_1 = require("../controllers/Checkout");
const router = express_1.default.Router();
router.route("/").post(Checkout_1.checkOutSession);
exports.default = router;
//# sourceMappingURL=Checkout.js.map