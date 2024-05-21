import express from 'express'
import { upload } from '../middleware/multer';
import { userAuthMiddleware } from '../middleware/userAuthMiddleware';
import { createStore, deleteStore, getMyStore } from '../controller/userController';
const router = express.Router();

router.post('/create-store', userAuthMiddleware, upload, createStore);
router.delete('/delete-store/:id', userAuthMiddleware, deleteStore);
router.get('/get-my-store', userAuthMiddleware, getMyStore)

export const storeRouter = router;