import User from "../models/users.model.js"
import type {GoogleUser, LocalUser} from "../types/auth.type.js"

export const findUserByGoogleIdAsync = (googleId: string) =>
    User.findOne({googleId})

export const findUserByEmailAsync = (email: string) => User.findOne({email})

export const createUserAsync = (user: GoogleUser | LocalUser) =>
    User.create(user)
