"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.stripe = void 0;
// Import config to use variable in dotenv file
const dotenv_1 = require("dotenv");
if (process.env.NODE_ENV !== "production") {
    (0, dotenv_1.config)();
}
// Import libraries
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const Checkout_1 = __importDefault(require("./routes/Checkout"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
// Import Stripe from stripe library
const stripe_1 = __importDefault(require("stripe"));
exports.stripe = new stripe_1.default(process.env.STRIPE_SECRET, {
    apiVersion: "2020-08-27",
});
const PORT = process.env.PORT;
app.get("/", (req, res) => {
    res.status(200).send("This is backend");
});
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
const api_1 = __importDefault(require("./api"));
app.use("/api", api_1.default);
app.use("/checkout", Checkout_1.default);
//# sourceMappingURL=server.js.map