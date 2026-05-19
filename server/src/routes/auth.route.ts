import express from "express"
import passport from "passport"
import asyncHandler from "express-async-handler"
import {
    getLoggedUserAsync,
    loginAsync,
    loginGoogleAsync,
    logoutAsync,
    registerAsync,
} from "../controllers/auth.controller.js"
import {requireAuth} from "../middlewares/authenticated.middleware.js"
const router = express.Router()

router.get("/me", asyncHandler(requireAuth), asyncHandler(getLoggedUserAsync))
router.post(
    "/login",
    passport.authenticate("local", {
        session: false,
    }),
    asyncHandler(loginAsync),
)
router.post("/register", asyncHandler(registerAsync))
router.delete("/logout", asyncHandler(requireAuth), asyncHandler(logoutAsync))

router.get(
    "/google",
    passport.authenticate("google", {
        scope: ["profile", "email"],
        session: false,
    }),
)
router.get(
    "/google/callback",
    passport.authenticate("google", {
        failureRedirect: "/login",
        session: false,
    }),
    asyncHandler(loginGoogleAsync),
)

export default router
