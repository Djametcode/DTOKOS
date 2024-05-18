"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.productModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const { Schema } = mongoose_1.default;
const productSchema = new Schema({
    productName: {
        type: String,
        required: [true, "please provide product name"]
    },
    price: {
        type: Number,
        required: [true, "please provide price"]
    },
    stock: {
        type: Number,
        default: 1
    },
    image: {
        type: String,
        required: [true, "please provide product image"]
    },
    description: {
        type: String,
        required: [true, "please provide your product description"]
    },
    rating: [{
            ratingId: {
                type: Schema.Types.ObjectId
            }
        }],
    totalSold: {
        type: Number,
        default: 0
    }
});
exports.productModel = mongoose_1.default.model("Product", productSchema);
