import { IUser } from "../models/user.model";
import jwt, { Secret } from "jsonwebtoken";
require("dotenv").config();

interface IActivationToken {
  token: string;
  activationCode: string;
}
export const createActivationToken = function (
  user: Partial<IUser>
): IActivationToken {
  const activationCode = Math.floor(1000 + Math.random() * 9000).toString();
  const token = jwt.sign(
    {
      user,
      activationCode,
    },
    process.env.ACTIVATION_SECRET as Secret,
    {
      expiresIn: "5m",
    }
  );

  return {
    token,
    activationCode,
  };
};
