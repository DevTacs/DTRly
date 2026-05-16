import User from "../models/users.model.js"
import type {GoogleUser, LocalUser} from "../types/auth.type.js"

export const findUserByGoogleIdAsync = (googleId: string) =>
    User.findOne({googleId})

export const findUserByEmailAsync = (email: string) => User.findOne({email})

export const createGoogleUserAsync = (user: GoogleUser) => User.create(user)

export const createLocalUserAsync = (user: LocalUser) => User.create(user)
