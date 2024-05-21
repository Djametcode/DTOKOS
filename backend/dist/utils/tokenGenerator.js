"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.jwtGenerator = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const jwtGenerator = (data) => {
    return jsonwebtoken_1.default.sign({
        userId: data.userId,
        email: data.email,
    }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_TIMES });
};
exports.jwtGenerator = jwtGenerator;
