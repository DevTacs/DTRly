import express from "express"
import cors from "cors"
import connectDB from "./configs/db.js"

const app = express()
app.use(cors())

connectDB()

import AuthRouter from "./routes/auth.route.js"

app.use("/api/auth", AuthRouter)

const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
