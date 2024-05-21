"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.storeModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const { Schema } = mongoose_1.default;
const storeSchema = new Schema({
    storeTitle: {
        type: String,
        required: [true, "please provide store title"]
    },
    createdBy: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    product: [{
            productId: {
                type: Schema.Types.ObjectId,
                ref: "Product"
            }
        }],
    follower: [{
            storeId: {
                type: Schema.Types.ObjectId,
                ref: "Store"
            }
        }],
    following: [{
            storeId: {
                type: Schema.Types.ObjectId,
                ref: "Store"
            }
        }],
    storeImage: {
        type: String,
        required: [true, "please provide store image"]
    },
    description: {
        type: String,
        default: ""
    }
});
exports.storeModel = mongoose_1.default.model("Store", storeSchema);
