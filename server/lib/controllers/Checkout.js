"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkOutSession = exports.createStripeCheckOutSession = void 0;
const server_1 = require("../server");
const createStripeCheckOutSession = async (line_items) => {
    const url = process.env.WEB_URL;
    const session = await server_1.stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        line_items,
        success_url: `${url}/success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${url}/failed`,
    });
    return session;
};
exports.createStripeCheckOutSession = createStripeCheckOutSession;
const checkOutSession = async (req, res) => {
    try {
        const checkOut = await createStripeCheckOutSession(req.body.line_items);
        console.log(checkOut);
        if (checkOut === null) {
            res.status(404).send("Please enter the item you want to check out");
        }
        else {
            res.status(200).send(checkOut);
        }
    }
    catch (error) {
        res.status(500).send("Internal error");
    }
};
exports.checkOutSession = checkOutSession;
//# sourceMappingURL=Checkout.js.map