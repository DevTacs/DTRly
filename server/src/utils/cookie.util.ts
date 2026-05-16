import type {Response, CookieOptions} from "express"

const cookieOptions: CookieOptions = {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
    maxAge: 1000 * 60 * 60,
}

export const setAuthCookie = (res: Response, token: string) => {
    return res.cookie("authToken", token, cookieOptions)
}

export const clearAuthCookie = (res: Response) => res.clearCookie("authToken")
