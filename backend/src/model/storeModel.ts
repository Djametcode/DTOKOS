import mongoose, { Types } from "mongoose";
const { Schema } = mongoose

interface IStoreFollower {
    storeId: Types.ObjectId
}

interface IstoreFollowing {
    storeId: Types.ObjectId
}

interface IproductId {
    productId: Types.ObjectId
}

interface Istore {
    storeTitle: string;
    createdBy: Types.ObjectId;
    product: IproductId[];
    follower: IStoreFollower[];
    following: IstoreFollowing[];
    storeImage: string;
    description: string;
}

const storeSchema = new Schema<Istore>({
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
})

export const storeModel = mongoose.model("Store", storeSchema)