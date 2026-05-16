import type {NextFunction, Request, Response} from "express"
import {generateToken, verifyToken} from "../utils/jwt.util.js"
import type {LocalUser, User} from "../types/auth.type.js"
import {setAuthCookie} from "../utils/cookie.util.js"
import {
    createLocalUserAsync,
    findUserByEmailAsync,
} from "../services/user.service.js"
import {hashPassword} from "../utils/bcrypt-util.js"
import createHttpError from "http-errors"

export const loginAsync = async (req: Request, res: Response) => {
    const user = verifyToken(req.cookies.authToken)
    res.status(200).json({
        user,
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

    let user = await findUserByEmailAsync(payload.email)
    if (user) next(createHttpError(400, "User already exists"))

    const hashedPassword = await hashPassword(payload.password)
    payload.password = hashedPassword
    payload.provider = "local"

    const createUserPayload: LocalUser = {
        firstName: payload.firstName,
        middleName: payload.middleName ?? null,
        lastName: payload.lastName,
        name: `${payload.firstName} ${payload.middleName ?? ""} ${payload.lastName}`,
        email: payload.email,
        password: payload.password,
        avatar: payload.avatar,
        provider: payload.provider,
    }

    const createdUser = await createLocalUserAsync(createUserPayload)

    const tokenUserPayload: User = {
        _id: createdUser._id,
        name: createdUser.name!,
        email: createdUser.email,
        avatar: createdUser.avatar,
    }
    const token = generateToken(tokenUserPayload)
    setAuthCookie(res, token)
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
