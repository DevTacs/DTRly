import type {NextFunction, Request, Response} from "express"
import {generateToken} from "../utils/jwt.util.js"
import type {LocalUser, User} from "../types/auth.type.js"
import {setAuthCookie} from "../utils/cookie.util.js"
import {
    createUserAsync,
    findUserByEmailAsync,
} from "../services/user.service.js"
import {hashPassword} from "../utils/bcrypt-util.js"
import createHttpError from "http-errors"

export const loginAsync = async (req: Request, res: Response) => {
    console.log(req.user)
    res.status(200).json({
        success: true,
        message: "User logged in successfully",
    })
}

export const registerAsync = async (
    req: Request,
    res: Response,
    next: NextFunction,
) => {
    const payload = req.body as LocalUser

    if (!payload) {
        next(createHttpError(400, "Invalid credentials"))
    }

    const user = await findUserByEmailAsync(payload.email)
    if (user) next(createHttpError(400, "User already exists"))

    const hashedPassword = await hashPassword(payload.password)
    payload.password = hashedPassword

    await createUserAsync(payload)
    res.status(201).json({success: true, message: "User created successfully"})
}

export const logoutAsync = async (req: Request, res: Response) => {
    res.status(200).json({message: "success"})
}

export const loginGoogleAsync = async (req: Request, res: Response) => {
    const user = req.user as User

    const token = generateToken(user)
    setAuthCookie(res, token)
    res.status(200).json({
        success: true,
        message: "User logged in successfully",
    })
}
