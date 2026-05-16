import User from "../models/users.model.js"
import type {GoogleUser} from "../types/auth.type.js"

export const findUserByGoogleIdAsync = (googleId: string) =>
    User.findOne({googleId})

export const createUserAsync = (user: GoogleUser) => User.create(user)
