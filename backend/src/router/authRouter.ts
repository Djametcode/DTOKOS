import express from 'express';
import { loginUser, registerUser } from '../controller/userController';
const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);

export const authRouter = router;