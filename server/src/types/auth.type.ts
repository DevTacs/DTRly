import {Types} from "mongoose"

type Provider = "local" | "google"
export type GoogleUser = {
    googleId: string
    name: string
    email: string
    avatar: string
    provider: Provider
}

export type LocalUser = {
    firstName: string
    middleName?: string | null
    lastName: string
    name: string
    email: string
    password: string
    avatar: string
    provider: Provider
}

export type LoggedUser = {
    email: string
    password: string
}

export type User = {
    _id: Types.ObjectId
    name: string
    email: string
    avatar: string
}
