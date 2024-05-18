import mongoose, { Types } from "mongoose";
const { Schema } = mongoose;

interface Icart {
  productId: Types.ObjectId;
  total: number;
  voucher: string;
  createdBy: Types.ObjectId;
  createdDate: Date;
}

const cartSchema = new Schema<Icart>({
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

export const cartModel = mongoose.model("Cart", cartSchema);
