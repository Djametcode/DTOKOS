import mongoose, { Types, mongo } from "mongoose";
const { Schema } = mongoose;

interface Irating {
  ratingId: Types.ObjectId;
}

interface Iproduct {
  productName: string;
  price: number;
  stock: number;
  image: string;
  description: string;
  rating: Irating[];
  totalSold: number;
}

const productSchema = new Schema<Iproduct>({
  productName: {
    type: String,
    required: [true, "please provide product name"],
  },
  price: {
    type: Number,
    required: [true, "please provide price"],
  },
  stock: {
    type: Number,
    default: 1,
  },
  image: {
    type: String,
    required: [true, "please provide product image"],
  },
  description: {
    type: String,
    required: [true, "please provide your product description"],
  },
  rating: [
    {
      ratingId: {
        type: Schema.Types.ObjectId,
      },
    },
  ],
  totalSold: {
    type: Number,
    default: 0,
  },
});

export const productModel = mongoose.model("Product", productSchema);
