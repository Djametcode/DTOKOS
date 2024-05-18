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
exports.loginUser = void 0;
const userModel_1 = require("../model/userModel");
const hashPassword_1 = require("../utils/hashPassword");
const comparePass_1 = require("../utils/comparePass");
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
        });
        const user = yield userModel_1.userModel.create(newUser);
        return res.status(200).json({ msg: "success", user });
    }
    catch (error) {
        console.log(error);
    }
});
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
    }
    catch (error) {
        console.log(error);
    }
});
exports.loginUser = loginUser;
