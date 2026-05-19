import type {NextFunction, Request, Response} from "express"
import {generateToken, verifyToken} from "../utils/jwt.util.js"
import type {LocalUser, LoggedUser, User} from "../types/auth.type.js"
import {setAuthCookie} from "../utils/cookie.util.js"
import {
    createLocalUserAsync,
    findUserByEmailAsync,
} from "../services/user.service.js"
import {comparePassword, hashPassword} from "../utils/bcrypt-util.js"
import createHttpError from "http-errors"

export const loginAsync = async (
    req: Request,
    res: Response,
    next: NextFunction,
) => {
    const payload = req.body as LoggedUser
    if (!payload) {
        next(createHttpError(400, "Invalid credentials"))
    }

    const user = await findUserByEmailAsync(payload.email)
    if (!user) return next(createHttpError(400, "User not found"))

    const isMatch = await comparePassword(payload.password, user?.password!)
    if (!isMatch) return next(createHttpError(400, "Invalid credentials"))

    const userPayload: User = {
        _id: user._id,
        name: user.name!,
        email: user.email,
        avatar: user.avatar,
    }
    const token = generateToken(userPayload)
    setAuthCookie(res, token)
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
        return next(createHttpError(400, "Invalid credentials"))
    }

    let user = await findUserByEmailAsync(payload.email)
    if (user) return next(createHttpError(400, "User already exists"))

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
    res.clearCookie("authToken")
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

export const getLoggedUserAsync = async (req: Request, res: Response) => {
    const user = req.user as User
    res.status(200).json({user, success: true, message: "Logged user details"})
}
