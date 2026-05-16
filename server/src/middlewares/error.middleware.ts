import type {ErrorRequestHandler} from "express"

const errorMiddleware: ErrorRequestHandler = (err, req, res, next) => {
    let statusCode = err.status || 500
    let message = err.message || "Internal Server Error"

    // mongoose bad ObjectId
    if (err.name === "CastError") {
        statusCode = 400
        message = "Invalid ID"
    }

    // mongoose duplicate key
    if (err.code === 11000) {
        statusCode = 400
        message = "Duplicate field value"
    }

    // mongoose validation
    if (err.name === "ValidationError") {
        statusCode = 400
        message = Object.values(err.errors)
            .map((val: any) => val.message)
            .join(", ")
    }

    res.status(statusCode).json({
        success: false,
        message,
    })
}

export default errorMiddleware
