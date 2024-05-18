"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const { Schema } = mongoose_1.default;
const userSchema = new Schema({
    username: {
        type: String,
        required: [true, "please provide username"],
    },
    email: {
        type: String,
        required: [true, "please provide email"],
    },
    password: {
        type: String,
        required: [true, "please provide password"],
    },
    balance: {
        type: Number,
        default: 0,
    },
    avatar: {
        type: String,
        default: "",
    },
    cart: [
        {
            cartId: {
                type: Schema.Types.ObjectId,
                ref: "Cart",
            },
        },
    ],
});
exports.userModel = mongoose_1.default.model("User", userSchema);
