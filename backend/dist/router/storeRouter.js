"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.storeRouter = void 0;
const express_1 = __importDefault(require("express"));
const multer_1 = require("../middleware/multer");
const userAuthMiddleware_1 = require("../middleware/userAuthMiddleware");
const userController_1 = require("../controller/userController");
const router = express_1.default.Router();
router.post('/create-store', userAuthMiddleware_1.userAuthMiddleware, multer_1.upload, userController_1.createStore);
router.delete('/delete-store/:id', userAuthMiddleware_1.userAuthMiddleware, userController_1.deleteStore);
router.get('/get-my-store', userAuthMiddleware_1.userAuthMiddleware, userController_1.getMyStore);
exports.storeRouter = router;
