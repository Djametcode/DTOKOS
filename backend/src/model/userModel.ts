import mongoose, { Types } from "mongoose";
const {Schema} = mongoose;

interface Icart {
    cartId: Types.ObjectId
}

interface Iuser {
    username: string;
    email: string;
    password: string;
    balance: number;
    avatar: string; 
    cart: Icart[];
}

const userSchema = new Schema<Iuser>({
    username: {
        type: String,
        required: [true, "please provide username"]
    },
    email: {
        type: String,
        required: [true, "please provide email"]
    },
    password: {
        type: String,
        required: [true, "please provide password"]
    },
    balance: {
        type: Number,
        default: 0
    },
    avatar: {
        type: String,
        default: ""
    },
    cart: [{
        cartId: {
            type: Schema.Types.ObjectId,
            ref: "Cart"
        }
    }]
})

export const userModel = mongoose.model("User", userSchema)