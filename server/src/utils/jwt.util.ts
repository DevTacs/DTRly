import jwt from "jsonwebtoken"
import type {User} from "../types/auth.type.js"

export const generateToken = (user: User) =>
    jwt.sign(user, process.env.JWT_SECRET!, {expiresIn: "1h"})

export const verifyToken = (token: string) =>
    jwt.verify(token, process.env.JWT_SECRET!)
