import express from "express"
import passport from "passport"
import asyncHandler from "express-async-handler"
import {
    loginAsync,
    loginGoogleAsync,
    logoutAsync,
    registerAsync,
} from "../controllers/auth.controller.js"
const router = express.Router()

router.post(
    "/login",
    passport.authenticate("local", {
        session: false,
    }),
    asyncHandler(loginAsync),
)
router.post("/register", asyncHandler(registerAsync))
router.delete("/logout", asyncHandler(logoutAsync))

// redirect to google
router.get(
    "/google",
    passport.authenticate("google", {
        scope: ["profile", "email"],
        session: false,
    }),
)

// callback
router.get(
    "/google/callback",
    passport.authenticate("google", {
        failureRedirect: "/login",
        session: false,
    }),
    asyncHandler(loginGoogleAsync),
)

export default router
