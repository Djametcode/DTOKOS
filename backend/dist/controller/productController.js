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
exports.getAllProduct = exports.createProduct = void 0;
const userModel_1 = require("../model/userModel");
const productModel_1 = require("../model/productModel");
const cloudinary_1 = require("cloudinary");
const storeModel_1 = require("../model/storeModel");
const createProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const { productName, price, stock, description } = req.body;
    const requiredFileds = ["productName", "price", "stock", "description"];
    for (const filed of requiredFileds) {
        if (!req.body[filed]) {
            return res.status(400).json({ msg: `please fill ${filed}` });
        }
    }
    const userId = req.user.userId;
    let targetFile = (_a = req.file) === null || _a === void 0 ? void 0 : _a.path;
    if (!userId) {
        return res.status(401).json({ msg: "User not authenticated" });
    }
    if (!targetFile) {
        return res.status(400).json({ msg: "Image file is required" });
    }
    try {
        const user = yield userModel_1.userModel.findOne({ _id: userId });
        if (!user) {
            return res.status(401).json({ msg: "user not found or token invalid" });
        }
        if (user.ownStore.length <= 0) {
            return res.status(400).json({ msg: "please create store first" });
        }
        const store = yield storeModel_1.storeModel.findOne({ createdBy: user._id });
        console.log(store);
        const images = yield cloudinary_1.v2.uploader.upload(targetFile, {
            folder: 'Testing',
            resource_type: 'auto',
        });
        const productBlueprint = new productModel_1.productModel({
            productName: productName,
            price: price,
            stock: stock,
            description: description,
            image: images.secure_url,
            storeId: store === null || store === void 0 ? void 0 : store._id,
            createdBy: user._id
        });
        const product = yield productModel_1.productModel.create(productBlueprint);
        store === null || store === void 0 ? void 0 : store.product.push({ productId: product._id });
        yield (store === null || store === void 0 ? void 0 : store.save());
        return res.status(200).json({ msg: "product created", product });
    }
    catch (error) {
        return console.log(error);
    }
});
exports.createProduct = createProduct;
const getAllProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const product = yield productModel_1.productModel.find({});
        return res.status(200).json({ msg: "success", product });
    }
    catch (error) {
        console.log(error);
    }
});
exports.getAllProduct = getAllProduct;
