import type {Request, Response, NextFunction} from "express"
import {verifyToken} from "../utils/jwt.util.js"
import createHttpError from "http-errors"

export const requireAuth = (
    req: Request,
    res: Response,
    next: NextFunction,
) => {
    const token = req.cookies.authToken
    if (!token) {
        return next(createHttpError(401, "Not authenticated"))
    }

    const decoded = verifyToken(token)
    req.user = decoded

    next()
}
