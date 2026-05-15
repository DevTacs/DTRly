import express from "express"
import cors from "cors"
import connectDB from "./configs/db.js"

const app = express()
app.use(cors())

connectDB()

const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
