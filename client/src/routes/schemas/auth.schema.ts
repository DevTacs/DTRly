import {z} from "zod"

export const loginSchema = z.object({
    email: z.email().trim().min(1, "Email is required"),
    password: z.string().trim().min(1, "Password is required"),
})

export const registerSchema = z.object({
    firstName: z.string().trim().min(1, "First name is required"),
    lastName: z.string().trim().min(1, "Last name is required"),
    middleName: z
        .string()
        .trim()
        .optional()
        .transform((v) => (v === "" ? null : v))
        .nullable(),
    email: z.email().trim().min(1, "Email is required"),
    password: z.string().trim().min(1, "Password is required"),
})

export type LoginSchemaInfer = z.infer<typeof loginSchema>
export type RegisterSchemaInfer = z.infer<typeof registerSchema>
