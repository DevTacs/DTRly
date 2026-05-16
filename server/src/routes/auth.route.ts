import express from "express"
import asyncHandler from "express-async-handler"
import {
    loginAsync,
    logoutAsync,
    registerAsync,
} from "../controllers/auth.controller.js"
const router = express.Router()

router.post("/login", asyncHandler(loginAsync))
router.post("/register", asyncHandler(registerAsync))
router.delete("/logout", asyncHandler)

export default router
