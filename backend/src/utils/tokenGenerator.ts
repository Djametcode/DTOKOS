import jwt from "jsonwebtoken";

interface Idata {
  userId: string;
  email: string;
}

export const jwtGenerator = (data: Idata) => {
  return jwt.sign({
    userId: data.userId,
    email: data.email,
  }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_TIMES });
};
