"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = __importDefault(require("express"));
exports.router = express_1.default.Router();
exports.router.route("/testApi").post((req, res) => {
    const { amount } = req.body;
    if (amount == null) {
        res.status(404).send("Please enter amount");
    }
    else {
        res.status(200).send({ with_tax: amount * 10 });
    }
});
exports.default = exports.router;
//# sourceMappingURL=api.js.map