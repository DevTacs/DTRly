import type {User} from "@/types/auth.type"
import api from "../configs/axios.config"

type ApiResponse<T> = {
    data: T
    success: boolean
    message: string
}

type ApiResponseWithoutData = {
    success: boolean
    message: string
}

export const getLoggedUserAsync = async (): Promise<ApiResponse<User>> => {
    try {
        const {
            data: {user, success, message},
        } = await api.get("/api/auth/me")
        return {data: user, success, message}
    } catch (error) {
        console.log(error)
        throw error
    }
}

export const loginAsync = async ({
    email,
    password,
}: {
    email: string
    password: string
}): Promise<ApiResponseWithoutData> => {
    try {
        const {
            data: {success, message},
        } = await api.post("/api/auth/login", {email, password})
        return {success, message}
    } catch (error) {
        console.log(error)
        throw error
    }
}

export const registerAsync = async ({
    firstName,
    lastName,
    middleName,
    email,
    password,
}: {
    firstName: string
    lastName: string
    middleName: string
    email: string
    password: string
}): Promise<ApiResponseWithoutData> => {
    try {
        const {
            data: {success, message},
        } = await api.post("/api/auth/register", {
            firstName,
            lastName,
            middleName,
            email,
            password,
        })
        return {success, message}
    } catch (error) {
        console.log(error)
        throw error
    }
}
