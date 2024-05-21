import { Request, Response } from "express"
import { userModel } from "../model/userModel";
import { productModel } from "../model/productModel";
import { v2 as cloudinary } from 'cloudinary'
import { storeModel } from "../model/storeModel";

export const createProduct = async (req: Request, res: Response) => {
    const { productName, price, stock, description } = req.body;

    const requiredFileds = ["productName", "price", "stock", "description"];

    for (const filed of requiredFileds) {
        if (!req.body[filed]) {
            return res.status(400).json({ msg: `please fill ${filed}` })
        }
    }

    const userId = req.user.userId;
    let targetFile = req.file?.path

    if (!userId) {
        return res.status(401).json({ msg: "User not authenticated" });
    }

    if (!targetFile) {
        return res.status(400).json({ msg: "Image file is required" });
    }

    try {
        const user = await userModel.findOne({ _id: userId })

        if (!user) {
            return res.status(401).json({ msg: "user not found or token invalid" })
        }

        if (user.ownStore.length <= 0) {
            return res.status(400).json({ msg: "please create store first" })
        }

        const store = await storeModel.findOne({ createdBy: user._id });
        console.log(store)

        const images = await cloudinary.uploader.upload(targetFile, {
            folder: 'Testing',
            resource_type: 'auto',
        })

        const productBlueprint = new productModel({
            productName: productName,
            price: price,
            stock: stock,
            description: description,
            image: images.secure_url,
            storeId: store?._id,
            createdBy: user._id
        })

        const product = await productModel.create(productBlueprint);
        store?.product.push({ productId: product._id });

        await store?.save()
        return res.status(200).json({ msg: "product created", product })

    } catch (error) {
        return console.log(error)
    }
}

export const getAllProduct = async (req: Request, res: Response) => {
    try {
        const product = await productModel.find({})
        return res.status(200).json({ msg: "success", product })
    } catch (error) {
        console.log(error)
    }
}