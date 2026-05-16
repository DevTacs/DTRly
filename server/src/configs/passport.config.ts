import passport from "passport"
import {Strategy as GoogleStrategy} from "passport-google-oauth20"
import {Strategy as LocalStrategy} from "passport-local"
import {
    createGoogleUserAsync,
    findUserByEmailAsync,
    findUserByGoogleIdAsync,
} from "../services/user.service.js"
import type {GoogleUser, User} from "../types/auth.type.js"
import {comparePassword} from "../utils/bcrypt-util.js"

passport.use(
    new GoogleStrategy(
        {
            clientID: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
            callbackURL: process.env.GOOGLE_CALLBACK_URL,
        },

        async (accessToken, refreshToken, profile, done) => {
            try {
                // 1. check if user exists
                let user = await findUserByGoogleIdAsync(profile.id)

                // 2. if not, create user
                if (!user) {
                    const payload: GoogleUser = {
                        googleId: profile.id,
                        name: profile.displayName,
                        email: profile.emails?.[0]?.value!,
                        avatar: profile.photos?.[0]?.value!,
                        provider: "google",
                    }
                    user = await createGoogleUserAsync(payload)
                }
                const userPayload: User = {
                    _id: user._id,
                    name: user.name!,
                    email: user.email,
                    avatar: user.avatar,
                }

                return done(null, userPayload)
            } catch (err) {
                return done(err, false)
            }
        },
    ),
)

passport.use(
    new LocalStrategy(
        {
            usernameField: "email", // 👈 use email instead of username
            passwordField: "password",
        },
        async (email, password, done) => {
            try {
                const user = await findUserByEmailAsync(email)

                if (!user) return done(null, false, {message: "User not found"})

                const isMatch = await comparePassword(password, user.password!)

                if (!isMatch)
                    return done(null, false, {message: "Wrong password"})
                const userPayload: User = {
                    _id: user._id,
                    name: `${user.firstName} ${user.middleName ?? ""} ${user.lastName}`,
                    email: user.email,
                    avatar: user.avatar,
                }
                return done(null, userPayload)
            } catch (err) {
                return done(err)
            }
        },
    ),
)
