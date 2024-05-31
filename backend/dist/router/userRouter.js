"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
const express_1 = __importDefault(require("express"));
const userAuthMiddleware_1 = require("../middleware/userAuthMiddleware");
const userController_1 = require("../controller/userController");
const router = express_1.default.Router();
router.post("/add-to-cart/:id", userAuthMiddleware_1.userAuthMiddleware, userController_1.addProductToCart);
router.post("/remove-from-cart/:id", userAuthMiddleware_1.userAuthMiddleware, userController_1.removeProductFromCart);
router.get("/current-user", userAuthMiddleware_1.userAuthMiddleware, userController_1.getCurrentUser);
exports.userRouter = router;
