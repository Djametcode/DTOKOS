"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMyStore = exports.removeProductFromCart = exports.addProductToCart = exports.deleteStore = exports.createStore = exports.loginUser = exports.registerUser = void 0;
const userModel_1 = require("../model/userModel");
const hashPassword_1 = require("../utils/hashPassword");
const comparePass_1 = require("../utils/comparePass");
const tokenGenerator_1 = require("../utils/tokenGenerator");
const storeModel_1 = require("../model/storeModel");
const cloudinary_1 = require("cloudinary");
const productModel_1 = require("../model/productModel");
const registerUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { username, email, password } = req.body;
    const requiredFileds = ["username", "email", "password"];
    for (const field of requiredFileds) {
        if (!req.body[field]) {
            return res.status(400).json({ msg: `please fill ${field} field` });
        }
    }
    try {
        const isUserExist = yield userModel_1.userModel.findOne({ email: email });
        if (isUserExist) {
            return res.status(400).json({ msg: "email already registered" });
        }
        const protectedPassword = yield (0, hashPassword_1.hashPassword)(password);
        const newUser = new userModel_1.userModel({
            username: username,
            email: email,
            password: protectedPassword,
            store: ""
        });
        const user = yield userModel_1.userModel.create(newUser);
        return res.status(200).json({ msg: "success", user });
    }
    catch (error) {
        console.log(error);
    }
});
exports.registerUser = registerUser;
const loginUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    if (!email) {
        return res.status(400).json({ msg: "please fill email" });
    }
    if (!password) {
        return res.status(400).json({ msg: "please fill password" });
    }
    try {
        const isUserExist = yield userModel_1.userModel.findOne({ email: email });
        if (!isUserExist) {
            return res.status(404).json({ msg: "email not registered yet" });
        }
        const isPassCorrect = yield (0, comparePass_1.comparePass)(isUserExist.password, password);
        console.log(isPassCorrect);
        if (!isPassCorrect) {
            return res.status(401).json({ msg: "password wrong" });
        }
        const token = (0, tokenGenerator_1.jwtGenerator)({ userId: isUserExist._id.toString(), email: isUserExist.email });
        console.log(token);
        return res.status(200).json({ msg: "success", isUserExist, token });
    }
    catch (error) {
        console.log(error);
    }
});
exports.loginUser = loginUser;
const createStore = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { storeTitle, description } = req.body;
    const userId = req.user.userId;
    let file = req.file;
    if (!userId) {
        return res.status(401).json({ msg: "user not authenticated" });
    }
    const requiredFileds = ["storeTitle", "description"];
    for (const field of requiredFileds) {
        if (!req.body[field]) {
            return res.status(400).json({ msg: `please fill ${field} field` });
        }
    }
    if (!file) {
        return res.status(400).json({ msg: "please attach image" });
    }
    try {
        const isUserExist = yield userModel_1.userModel.findOne({ _id: userId });
        if (!isUserExist) {
            return res.status(401).json({ msg: "user not found or token invalid" });
        }
        const storeImages = yield cloudinary_1.v2.uploader.upload(file.path, {
            folder: "Testing",
            resource_type: 'auto'
        });
        const storeBlueprint = new storeModel_1.storeModel({
            storeTitle: storeTitle,
            storeImage: storeImages.secure_url,
            description: description,
            createdBy: userId
        });
        const store = yield storeModel_1.storeModel.create(storeBlueprint);
        isUserExist.ownStore.push({ storeId: store._id });
        yield isUserExist.save();
        return res.status(200).json({ msg: "store created", isUserExist });
    }
    catch (error) {
        console.log(error);
    }
});
exports.createStore = createStore;
const deleteStore = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id: storeId } = req.params;
    const userId = req.user.userId;
    ;
    if (!userId) {
        return res.status(401).json({ msg: "user not found please login" });
    }
    try {
        const isUserExist = yield userModel_1.userModel.findOne({ _id: userId });
        if (!isUserExist) {
            return res.status(401).json({ msg: "token invalid or user not found" });
        }
        const store = yield storeModel_1.storeModel.findOne({ _id: storeId });
        if (!store) {
            return res.status(404).json({ msg: "store not found" });
        }
        const checkOwner = store.createdBy.toString() === userId;
        console.log(checkOwner);
        if (!checkOwner) {
            return res.status(401).json({ msg: "please login with correct account" });
        }
        const updatedUser = yield userModel_1.userModel.findOneAndUpdate({ _id: userId }, { "store.storeId": "" }, { new: true });
        const deleteStore = yield storeModel_1.storeModel.findOneAndDelete({ createdBy: userId });
        return res.status(200).json({ msg: "store deleted", deleteStore, updatedUser });
    }
    catch (error) {
        console.log(error);
    }
});
exports.deleteStore = deleteStore;
const addProductToCart = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id: productId } = req.params;
    ;
    const { quantity } = req.body;
    const userId = req.user.userId;
    if (!userId) {
        return res.status(401).json({ msg: "user not found please login" });
    }
    if (!quantity || quantity <= 0) {
        return res.status(400).json({ msg: "invalid quantitiy" });
    }
    try {
        const isUserExist = yield userModel_1.userModel.findOne({ _id: userId });
        if (!isUserExist) {
            return res.status(401).json({ msg: "token invalid or user not found" });
        }
        const product = yield productModel_1.productModel.findOne({ _id: productId });
        if (!product) {
            return res.status(404).json({ msg: "product not found" });
        }
        const isProductAdded = isUserExist.cart.findIndex((item) => item.productId === product._id);
        console.log(isProductAdded);
        if (isProductAdded !== -1) {
            //if product already added
            isUserExist.cart[isProductAdded].quantity += quantity;
        }
        else {
            //add new item to cart
            isUserExist.cart.push({
                productId: product._id,
                quantity: quantity
            });
        }
        yield isUserExist.save();
        return res.status(200).json({ msg: "product added to cart" });
    }
    catch (error) {
        console.log(error);
    }
});
exports.addProductToCart = addProductToCart;
const removeProductFromCart = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id: productId } = req.params;
    const userId = req.user.userId;
    const { quantity } = req.body;
    if (!userId) {
        return res.status(401).json({ msg: "user not found please login" });
    }
    try {
        const isUserExist = yield userModel_1.userModel.findOne({ _id: userId });
        if (!isUserExist) {
            return res.status(401).json({ msg: "token invalid or user not found" });
        }
        const product = yield productModel_1.productModel.findOne({ _id: productId });
        if (!product) {
            return res.status(404).json({ msg: "product not found" });
        }
        const isProductAdded = isUserExist.cart.findIndex((item) => item.productId === product._id);
        console.log(isProductAdded);
        if (isProductAdded !== -1) {
            //if product already added
            isUserExist.cart[isProductAdded].quantity -= quantity;
            if (isUserExist.cart[isProductAdded].quantity <= 0) {
                isUserExist.cart.splice(isProductAdded, 1);
            }
        }
        else {
            return res.status(404).json({ msg: "product not found in cart" });
        }
        yield isUserExist.save();
        return res.status(200).json({ msg: "product removed to cart" });
    }
    catch (error) {
        console.log(error);
    }
});
exports.removeProductFromCart = removeProductFromCart;
const getMyStore = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const isUserExist = yield userModel_1.userModel.findOne({ _id: req.user.userId });
        if (!isUserExist) {
            return res.status(404).json({ msg: "user not foun" });
        }
        const myStoreId = isUserExist.ownStore[0].storeId;
        const myStore = yield storeModel_1.storeModel.findOne({ _id: myStoreId });
        if ((myStore === null || myStore === void 0 ? void 0 : myStore.createdBy.toString()) !== req.user.userId) {
            return res.status(401).json({ msg: "please login with correct account" });
        }
        return res.status(200).json({ msg: "success", myStore });
    }
    catch (error) {
        console.log(error);
    }
});
exports.getMyStore = getMyStore;
