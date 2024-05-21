import mongoose from "mongoose";

export const connectDatabase = (url: string) => {
    return mongoose.connect(url);
}