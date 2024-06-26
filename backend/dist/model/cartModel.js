"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.cartModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const { Schema } = mongoose_1.default;
const cartSchema = new Schema({
    productId: {
        type: Schema.Types.ObjectId,
        ref: "Product",
    },
    total: {
        type: Number,
        required: true,
    },
    voucher: {
        type: String,
        default: "",
    },
    createdBy: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    createdDate: {
        type: Date,
        default: Date.now(),
    },
});
exports.cartModel = mongoose_1.default.model("Cart", cartSchema);
