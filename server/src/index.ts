import express from "express"
import cors from "cors"
import connectDB from "./configs/db.config.js"
import AuthRouter from "./routes/auth.route.js"
import errorMiddleware from "./middlewares/error.middleware.js"

const app = express()
app.use(cors())
app.use(express.json())
connectDB()

app.use("/api/auth", AuthRouter)
app.use(errorMiddleware)

const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
