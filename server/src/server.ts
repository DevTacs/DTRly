import express from "express"
import cors from "cors"
import connectDB from "./configs/db.config.js"
import AuthRouter from "./routes/auth.route.js"
import errorMiddleware from "./middlewares/error.middleware.js"
import passport from "passport"
import cookieParser from "cookie-parser"
import "./configs/passport.config.js"

const app = express()
app.use(
    cors({
        origin: process.env.CLIENT_URL,
        credentials: true,
    }),
)
app.use(express.json())
app.use(cookieParser())
connectDB()

app.use(passport.initialize()) // 🔥 REQUIRED
app.use("/api/auth", AuthRouter)
app.use(errorMiddleware)

const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
