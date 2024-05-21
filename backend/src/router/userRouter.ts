import express from 'express'
import { userAuthMiddleware } from '../middleware/userAuthMiddleware';
import { addProductToCart, removeProductFromCart } from '../controller/userController';
const router = express.Router();

router.post("/add-to-cart/:id", userAuthMiddleware, addProductToCart);
router.post("/remove-from-cart/:id", userAuthMiddleware, removeProductFromCart);

export const userRouter = router;