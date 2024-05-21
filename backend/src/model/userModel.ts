import mongoose, { Types } from "mongoose";
const { Schema } = mongoose;

interface Icart {
  productId: Types.ObjectId;
  quantity: number;
}

interface Istore {
  storeId: Types.ObjectId
}

interface Iuser {
  username: string;
  email: string;
  password: string;
  balance: number;
  avatar: string;
  cart: Icart[];
  ownStore: Istore[]
}

const userSchema = new Schema<Iuser>({
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
      productId: {
        type: Schema.Types.ObjectId,
        ref: "Product"
      },
      quantity: {
        type: Number,
        default: 1,
      }
    },
  ],
  ownStore: [{
    storeId: {
      type: Schema.Types.ObjectId,
      ref: "Store"
    }
  }]
});

export const userModel = mongoose.model("User", userSchema);
