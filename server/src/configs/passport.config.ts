import passport from "passport"
import {Strategy as GoogleStrategy} from "passport-google-oauth20"
import {
    createUserAsync,
    findUserByGoogleIdAsync,
} from "../services/user.service.js"
import type {GoogleUser} from "../types/auth.type.js"

passport.use(
    new GoogleStrategy(
        {
            clientID: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
            callbackURL: "/auth/google/callback",
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
                    user = await createUserAsync(payload)
                }

                return done(null, user)
            } catch (err) {
                return done(err, false)
            }
        },
    ),
)
