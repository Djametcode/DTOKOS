import express from 'express'
import { createProduct, getAllProduct } from '../controller/productController';
import { upload } from '../middleware/multer';
import { userAuthMiddleware } from '../middleware/userAuthMiddleware';
const router = express.Router();

router.get('/get-all-product', getAllProduct);
router.post('/create-product', userAuthMiddleware, upload, createProduct);

export const productRouter = router;