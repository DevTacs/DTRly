export type Provider = "local" | "google"

export type GoogleUser = {
    googleId: string
    name: string
    email: string
    avatar: string
    provider: Provider
}
