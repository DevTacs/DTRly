import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        trim: true,
    },
    middleName: {
        type: String,
        trim: true,
    },
    lastName: {
        type: String,
        trim: true,
    },
    password: {
        type: String,
        trim: true,
    },
    googleId: {
        type: String,
        unique: true,
        sparse: true,
        trim: true,
    },
    name: {
        type: String,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    provider: {
        type: String,
        enum: ["local", "google"],
    },
    avatar: {
        type: String,
        trim: true,
        default: "",
    },
})

export default mongoose.model("User", userSchema)
