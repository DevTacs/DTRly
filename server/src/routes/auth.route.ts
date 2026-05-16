import express from "express"
import passport from "passport"
import asyncHandler from "express-async-handler"
import {
    loginAsync,
    logoutAsync,
    registerAsync,
} from "../controllers/auth.controller.js"
import {log} from "node:console"
const router = express.Router()

router.post("/login", asyncHandler(loginAsync))
router.post("/register", asyncHandler(registerAsync))
router.delete("/logout", asyncHandler(logoutAsync))

// redirect to google
router.get(
    "/auth/google",
    passport.authenticate("google", {
        scope: ["profile", "email"],
    }),
)

// callback
router.get(
    "/auth/google/callback",
    passport.authenticate("google", {
        failureRedirect: "/login",
    }),
    (req, res) => {
        res.redirect("/profile")
    },
)

export default router
