import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { userModel } from "../model/userModel";

export const userAuthMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    const headers = req.headers.authorization;

    if (!headers || !headers.startsWith("Bearer ")) {
        return res.status(401).json({ msg: "please login first" })
    }

    const token = headers.split(" ")[1];

    try {
        const data = jwt.verify(token, process.env.JWT_SECRET) as { userId: string, email: string }
        console.log(data)
        const user = await userModel.findOne({ _id: data.userId });
        console.log(user);

        if (!user) {
            return res.status(401).json({ msg: "user not found or token invalid" })
        }

        req.user = { userId: data.userId, email: data.email };
        next()
    } catch (error) {
        console.log(error)
    }
}