"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.productRouter = void 0;
const express_1 = __importDefault(require("express"));
const productController_1 = require("../controller/productController");
const multer_1 = require("../middleware/multer");
const userAuthMiddleware_1 = require("../middleware/userAuthMiddleware");
const router = express_1.default.Router();
router.get('/get-all-product', productController_1.getAllProduct);
router.post('/create-product', userAuthMiddleware_1.userAuthMiddleware, multer_1.upload, productController_1.createProduct);
exports.productRouter = router;
