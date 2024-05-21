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
require('dotenv/config');
const express_1 = __importDefault(require("express"));
const connectDB_1 = require("./database/connectDB");
const cors_1 = __importDefault(require("cors"));
const authRouter_1 = require("./router/authRouter");
const cloudinary_1 = require("cloudinary");
const productRouter_1 = require("./router/productRouter");
const storeRouter_1 = require("./router/storeRouter");
const userRouter_1 = require("./router/userRouter");
const app = (0, express_1.default)();
cloudinary_1.v2.config({
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET,
    cloud_name: process.env.CLOUD_NAME
});
app.use((0, cors_1.default)({
    origin: ["*"]
}));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
app.use('/api/v19/dtokos', authRouter_1.authRouter);
app.use('/api/v19/dtokos/prod', productRouter_1.productRouter);
app.use('/api/v19/dtokos/store', storeRouter_1.storeRouter);
app.use('/api/v19/dtokos/user', userRouter_1.userRouter);
function startServer() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield (0, connectDB_1.connectDatabase)(process.env.MONGO_URL);
            app.listen(3000, () => console.log("Server running"));
        }
        catch (error) {
            console.log(error);
        }
    });
}
startServer();
