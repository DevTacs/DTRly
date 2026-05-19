import {queryClient} from "@/configs/query.config"
import {
    registerSchema,
    type RegisterSchemaInfer,
} from "@/routes/schemas/auth.schema"
import {registerAsync} from "@/services/auth.service"
import {zodResolver} from "@hookform/resolvers/zod"
import {useMutation} from "@tanstack/react-query"
import {createFileRoute, Link, useNavigate} from "@tanstack/react-router"
import {useForm} from "react-hook-form"

export const Route = createFileRoute("/_layout/_public/register")({
    component: RegisterPage,
})

function RegisterPage() {
    const navigate = useNavigate()
    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm<RegisterSchemaInfer>({
        resolver: zodResolver(registerSchema),
        defaultValues: {
            firstName: "",
            middleName: "",
            lastName: "",
            email: "",
            password: "",
        },
    })

    const {mutateAsync} = useMutation({
        mutationKey: ["register"],
        mutationFn: registerAsync,
        onSuccess: () => {
            queryClient.refetchQueries({queryKey: ["loggedUser"]})
            navigate({to: "/dtr/intern"})
        },
    })

    const handleRegister = async (data: RegisterSchemaInfer) => {
        await mutateAsync(data)
    }

    const handleGoogleSignup = () =>
        (window.location.href = import.meta.env.VITE_GOOGLE_AUTH)

    return (
        <div className="w-full max-w-md">
            <div className="border bg-card shadow-sm rounded-2xl px-8 py-4">
                {/* Header */}
                <div className="mb-6 text-center">
                    <h1 className="text-2xl font-bold tracking-tight">
                        Create account
                    </h1>
                    <p className="text-sm text-muted-foreground mt-1">
                        Start using
                        <span className="font-bold pl-1">
                            DTR.
                            <span className="text-sidebar-primary">ly</span>
                        </span>
                    </p>
                </div>

                {/* Form */}
                <form
                    onSubmit={handleSubmit(handleRegister)}
                    className="space-y-2">
                    <div className="grid grid-cols-2 gap-2">
                        <div>
                            <label className="text-sm font-medium">
                                First name
                            </label>
                            <input
                                type="text"
                                placeholder="Enter your firstname"
                                className="mt-1 w-full rounded-lg border px-3 py-2 text-sm bg-background"
                                {...register("firstName")}
                            />
                            {errors.firstName && (
                                <p className="mt-1 text-xs text-red-500">
                                    {errors.firstName.message}
                                </p>
                            )}
                        </div>

                        <div>
                            <label className="text-sm font-medium">
                                Middle name
                            </label>
                            <input
                                type="text"
                                placeholder="Enter your middlename"
                                className="mt-1 w-full rounded-lg border px-3 py-2 text-sm bg-background"
                                {...register("middleName")}
                            />
                            {errors.middleName && (
                                <p className="mt-1 text-xs text-red-500">
                                    {errors.middleName.message}
                                </p>
                            )}
                        </div>
                    </div>

                    <div>
                        <label className="text-sm font-medium">Last name</label>
                        <input
                            type="text"
                            placeholder="Enter your lastname"
                            className="mt-1 w-full rounded-lg border px-3 py-2 text-sm bg-background"
                            {...register("lastName")}
                        />
                        {errors.lastName && (
                            <p className="mt-1 text-xs text-red-500">
                                {errors.lastName.message}
                            </p>
                        )}
                    </div>

                    <div>
                        <label className="text-sm font-medium">Email</label>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="mt-1 w-full rounded-lg border px-3 py-2 text-sm bg-background"
                            {...register("email")}
                        />
                        {errors.email && (
                            <p className="mt-1 text-xs text-red-500">
                                {errors.email.message}
                            </p>
                        )}
                    </div>

                    <div>
                        <label className="text-sm font-medium">Password</label>
                        <input
                            type="password"
                            placeholder="Enter your password"
                            className="mt-1 w-full rounded-lg border px-3 py-2 text-sm bg-background"
                            {...register("password")}
                        />
                        {errors.password && (
                            <p className="mt-1 text-xs text-red-500">
                                {errors.password.message}
                            </p>
                        )}
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-primary text-white py-2 rounded-lg text-sm font-medium hover:opacity-90 transition">
                        Create account
                    </button>
                </form>

                {/* Divider */}
                <div className="my-4 flex items-center gap-3">
                    <div className="h-px flex-1 bg-border" />
                    <span className="text-xs text-muted-foreground">OR</span>
                    <div className="h-px flex-1 bg-border" />
                </div>

                {/* Google */}
                <button
                    onClick={handleGoogleSignup}
                    className="w-full flex items-center justify-center gap-2 border rounded-lg py-2 text-sm hover:bg-muted transition">
                    <img
                        src="https://www.svgrepo.com/show/475656/google-color.svg"
                        className="h-5 w-5"
                    />
                    Continue with Google
                </button>

                {/* Footer */}
                <p className="text-center text-xs text-muted-foreground mt-6">
                    Already have an account?{" "}
                    <Link to="/login" className="text-primary hover:underline">
                        Login
                    </Link>
                </p>
            </div>
        </div>
    )
}
