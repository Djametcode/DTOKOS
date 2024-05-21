import { Request, Response } from "express";
import { userModel } from "../model/userModel";
import { hashPassword } from "../utils/hashPassword";
import { comparePass } from "../utils/comparePass";
import { jwtGenerator } from "../utils/tokenGenerator";
import { storeModel } from "../model/storeModel";
import { v2 as cloudinary } from 'cloudinary'
import { productModel } from "../model/productModel";

export const registerUser = async (req: Request, res: Response) => {
  const { username, email, password } = req.body;

  const requiredFileds = ["username", "email", "password"];

  for (const field of requiredFileds) {
    if (!req.body[field]) {
      return res.status(400).json({ msg: `please fill ${field} field` });
    }
  }

  try {
    const isUserExist = await userModel.findOne({ email: email });

    if (isUserExist) {
      return res.status(400).json({ msg: "email already registered" });
    }

    const protectedPassword = await hashPassword(password);

    const newUser = new userModel({
      username: username,
      email: email,
      password: protectedPassword,
      store: ""
    });

    const user = await userModel.create(newUser);

    return res.status(200).json({ msg: "success", user });
  } catch (error) {
    console.log(error);
  }
};

export const loginUser = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  if (!email) {
    return res.status(400).json({ msg: "please fill email" });
  }

  if (!password) {
    return res.status(400).json({ msg: "please fill password" });
  }

  try {
    const isUserExist = await userModel.findOne({ email: email });

    if (!isUserExist) {
      return res.status(404).json({ msg: "email not registered yet" });
    }

    const isPassCorrect = await comparePass(isUserExist.password, password);
    console.log(isPassCorrect);

    if (!isPassCorrect) {
      return res.status(401).json({ msg: "password wrong" })
    }

    const token = jwtGenerator({ userId: isUserExist._id.toString(), email: isUserExist.email })
    console.log(token)

    return res.status(200).json({ msg: "success", isUserExist, token })
  } catch (error) {
    console.log(error);
  }
};

export const createStore = async (req: Request, res: Response) => {
  const { storeTitle, description } = req.body;
  const userId = req.user.userId;
  let file = req.file

  if (!userId) {
    return res.status(401).json({ msg: "user not authenticated" })
  }

  const requiredFileds = ["storeTitle", "description"]

  for (const field of requiredFileds) {
    if (!req.body[field]) {
      return res.status(400).json({ msg: `please fill ${field} field` })
    }
  }

  if (!file) {
    return res.status(400).json({ msg: "please attach image" })
  }


  try {
    const isUserExist = await userModel.findOne({ _id: userId })

    if (!isUserExist) {
      return res.status(401).json({ msg: "user not found or token invalid" })
    }

    const storeImages = await cloudinary.uploader.upload(file.path, {
      folder: "Testing",
      resource_type: 'auto'
    })

    const storeBlueprint = new storeModel({
      storeTitle: storeTitle,
      storeImage: storeImages.secure_url,
      description: description,
      createdBy: userId
    })

    const store = await storeModel.create(storeBlueprint);

    isUserExist.ownStore.push({ storeId: store._id });
    await isUserExist.save()

    return res.status(200).json({ msg: "store created", isUserExist })

  } catch (error) {
    console.log(error)
  }
}

export const deleteStore = async (req: Request, res: Response) => {
  const { id: storeId } = req.params;
  const userId = req.user.userId;;

  if (!userId) {
    return res.status(401).json({ msg: "user not found please login" })
  }

  try {
    const isUserExist = await userModel.findOne({ _id: userId })

    if (!isUserExist) {
      return res.status(401).json({ msg: "token invalid or user not found" })
    }

    const store = await storeModel.findOne({ _id: storeId })

    if (!store) {
      return res.status(404).json({ msg: "store not found" })
    }

    const checkOwner = store.createdBy.toString() === userId;
    console.log(checkOwner)

    if (!checkOwner) {
      return res.status(401).json({ msg: "please login with correct account" })
    }

    const updatedUser = await userModel.findOneAndUpdate({ _id: userId }, { "store.storeId": "" }, { new: true });
    const deleteStore = await storeModel.findOneAndDelete({ createdBy: userId });

    return res.status(200).json({ msg: "store deleted", deleteStore, updatedUser })

  } catch (error) {
    console.log(error)
  }
}

export const addProductToCart = async (req: Request, res: Response) => {
  const { id: productId } = req.params;;
  const { quantity } = req.body
  const userId = req.user.userId;

  if (!userId) {
    return res.status(401).json({ msg: "user not found please login" })
  }

  if (!quantity || quantity <= 0) {
    return res.status(400).json({ msg: "invalid quantitiy" })
  }

  try {
    const isUserExist = await userModel.findOne({ _id: userId })

    if (!isUserExist) {
      return res.status(401).json({ msg: "token invalid or user not found" })
    }

    const product = await productModel.findOne({ _id: productId })

    if (!product) {
      return res.status(404).json({ msg: "product not found" })
    }

    const isProductAdded = isUserExist.cart.findIndex((item) => item.productId === product._id);
    console.log(isProductAdded);

    if (isProductAdded !== -1) {
      //if product already added
      isUserExist.cart[isProductAdded].quantity += quantity;

    } else {
      //add new item to cart
      isUserExist.cart.push({
        productId: product._id,
        quantity: quantity
      })

    }

    await isUserExist.save();

    return res.status(200).json({ msg: "product added to cart" })
  } catch (error) {
    console.log(error)
  }
}

export const removeProductFromCart = async (req: Request, res: Response) => {
  const { id: productId } = req.params;
  const userId = req.user.userId;
  const { quantity } = req.body;

  if (!userId) {
    return res.status(401).json({ msg: "user not found please login" })
  }

  try {
    const isUserExist = await userModel.findOne({ _id: userId })

    if (!isUserExist) {
      return res.status(401).json({ msg: "token invalid or user not found" })
    }

    const product = await productModel.findOne({ _id: productId })

    if (!product) {
      return res.status(404).json({ msg: "product not found" })
    }

    const isProductAdded = isUserExist.cart.findIndex((item) => item.productId === product._id);
    console.log(isProductAdded);

    if (isProductAdded !== -1) {
      //if product already added
      isUserExist.cart[isProductAdded].quantity -= quantity;

      if (isUserExist.cart[isProductAdded].quantity <= 0) {
        isUserExist.cart.splice(isProductAdded, 1)
      }

    } else {

      return res.status(404).json({ msg: "product not found in cart" })
    }

    await isUserExist.save();

    return res.status(200).json({ msg: "product removed to cart" })
  } catch (error) {
    console.log(error)
  }
}

export const getMyStore = async (req: Request, res: Response) => {
  try {
    const isUserExist = await userModel.findOne({ _id: req.user.userId });

    if (!isUserExist) {
      return res.status(404).json({ msg: "user not foun" })
    }

    const myStoreId = isUserExist.ownStore[0].storeId;

    const myStore = await storeModel.findOne({ _id: myStoreId });

    if (myStore?.createdBy.toString() !== req.user.userId) {
      return res.status(401).json({ msg: "please login with correct account" })
    }

    return res.status(200).json({ msg: "success", myStore })
  } catch (error) {
    console.log(error)
  }
}