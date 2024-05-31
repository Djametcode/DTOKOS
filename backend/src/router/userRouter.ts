import express from 'express'
import { userAuthMiddleware } from '../middleware/userAuthMiddleware';
import { addProductToCart, getCurrentUser, removeProductFromCart } from '../controller/userController';
const router = express.Router();

router.post("/add-to-cart/:id", userAuthMiddleware, addProductToCart);
router.post("/remove-from-cart/:id", userAuthMiddleware, removeProductFromCart);
router.get("/current-user", userAuthMiddleware, getCurrentUser)

export const userRouter = router;