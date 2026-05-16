import type {Request, Response} from "express"
import User from "../models/users.model.js"

export const loginAsync = (req: Request, res: Response) => {
    try {
    } catch (error) {
        res.status(500).json({message: error})
    }
}

export const registerAsync = (req: Request, res: Response) => {
    try {
    } catch (error) {
        res.status(500).json({message: error})
    }
}

export const logoutAsync = (req: Request, res: Response) => {
    try {
    } catch (error) {
        res.status(500).json({message: error})
    }
}
