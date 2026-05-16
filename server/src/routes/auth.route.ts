import express from "express"
import {
    loginAsync,
    logoutAsync,
    registerAsync,
} from "../controllers/auth.controller.js"
const router = express.Router()

router.post("/login", loginAsync)
router.post("/register", registerAsync)
router.delete("/logout", logoutAsync)

export default router
