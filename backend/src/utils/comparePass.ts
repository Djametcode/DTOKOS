import bcrypt from "bcrypt";

export const comparePass = (userPass: string, inputPass: string) => {
  return bcrypt.compare(inputPass, userPass);
};
