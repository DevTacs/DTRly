import type {Request, Response} from "express"
import User from "../models/users.model.js"

export const loginAsync = (req: Request, res: Response) => {
    res.status(200).json({message: "success"})
}

export const registerAsync = (req: Request, res: Response) => {
    res.status(201).json({message: "success"})
}

export const logoutAsync = (req: Request, res: Response) => {
    res.status(200).json({message: "success"})
}
