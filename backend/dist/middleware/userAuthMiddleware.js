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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userAuthMiddleware = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const userModel_1 = require("../model/userModel");
const userAuthMiddleware = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const headers = req.headers.authorization;
    if (!headers || !headers.startsWith("Bearer ")) {
        return res.status(401).json({ msg: "please login first" });
    }
    const token = headers.split(" ")[1];
    try {
        const data = jsonwebtoken_1.default.verify(token, process.env.JWT_SECRET);
        console.log(data);
        const user = yield userModel_1.userModel.findOne({ _id: data.userId });
        console.log(user);
        if (!user) {
            return res.status(401).json({ msg: "user not found or token invalid" });
        }
        req.user = { userId: data.userId, email: data.email };
        next();
    }
    catch (error) {
        console.log(error);
    }
});
exports.userAuthMiddleware = userAuthMiddleware;
