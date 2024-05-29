require('dotenv/config')
import express from "express";
import { connectDatabase } from "./database/connectDB";
import cors from 'cors'
import { authRouter } from "./router/authRouter";
import { v2 as cloudinary } from 'cloudinary'
import { productRouter } from "./router/productRouter";
import { storeRouter } from "./router/storeRouter";
import { userRouter } from "./router/userRouter";
const app = express();

cloudinary.config({
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
  cloud_name: process.env.CLOUD_NAME
})

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }))

app.use('/api/v19/dtokos', authRouter);
app.use('/api/v19/dtokos/prod', productRouter)
app.use('/api/v19/dtokos/store', storeRouter)
app.use('/api/v19/dtokos/user', userRouter)


async function startServer() {
  try {
    await connectDatabase(process.env.MONGO_URL);
    app.listen(3000, () => console.log("Server running"));
  } catch (error) {
    console.log(error)
  }
}

startServer()