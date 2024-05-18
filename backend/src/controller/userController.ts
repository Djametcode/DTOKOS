import { Request, Response } from "express";
import { userModel } from "../model/userModel";
import { hashPassword } from "../utils/hashPassword";
import { comparePass } from "../utils/comparePass";

const registerUser = async (req: Request, res: Response) => {
  const { username, email, password } = req.body;

  const requiredFileds = ["username", "email", "password"];

  for (const field of requiredFileds) {
    if (!req.body[field]) {
      return res.status(400).json({ msg: `please fill ${field} field` });
    }
  }

  try {
    const isUserExist = await userModel.findOne({ email: email });

    if (isUserExist) {
      return res.status(400).json({ msg: "email already registered" });
    }

    const protectedPassword = await hashPassword(password);

    const newUser = new userModel({
      username: username,
      email: email,
      password: protectedPassword,
    });

    const user = await userModel.create(newUser);

    return res.status(200).json({ msg: "success", user });
  } catch (error) {
    console.log(error);
  }
};

export const loginUser = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  if (!email) {
    return res.status(400).json({ msg: "please fill email" });
  }

  if (!password) {
    return res.status(400).json({ msg: "please fill password" });
  }

  try {
    const isUserExist = await userModel.findOne({ email: email });

    if (!isUserExist) {
      return res.status(404).json({ msg: "email not registered yet" });
    }

    const isPassCorrect = await comparePass(isUserExist.password, password);
    console.log(isPassCorrect);
  } catch (error) {
    console.log(error);
  }
};
