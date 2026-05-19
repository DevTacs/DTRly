import {createFileRoute, Link} from "@tanstack/react-router"
import {useForm} from "react-hook-form"
import {zodResolver} from "@hookform/resolvers/zod"
import {loginSchema, type LoginSchemaInfer} from "@/routes/schemas/auth.schema"
import {useMutation} from "@tanstack/react-query"
import {loginAsync} from "@/services/auth.service"
import {queryClient} from "@/configs/query.config"

export const Route = createFileRoute("/_layout/_public/login")({
    component: LoginPage,
})

function LoginPage() {
    const {mutateAsync} = useMutation({
        mutationKey: ["login"],
        mutationFn: loginAsync,
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey: ["loggedUser"]})
        },
    })
    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm<LoginSchemaInfer>({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    })

    const handleLogin = async (data: LoginSchemaInfer) =>
        await mutateAsync(data)

    const handleGoogleLogin = () =>
        (window.location.href = import.meta.env.VITE_GOOGLE_AUTH)

    return (
        <div className="w-full max-w-md">
            <div className="border bg-card shadow-sm rounded-2xl p-8">
                {/* Header */}
                <div className="mb-6 text-center">
                    <h1 className="text-2xl font-bold tracking-tight">
                        Welcome back
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
                    onSubmit={handleSubmit(handleLogin)}
                    className="space-y-4">
                    <div>
                        <label className="text-sm font-medium">Username</label>
                        <input
                            type="email"
                            className="mt-1 w-full rounded-lg border px-3 py-2 text-sm bg-background focus:outline-none focus:ring-2 focus:ring-primary/30"
                            placeholder="Enter email"
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
                            className="mt-1 w-full rounded-lg border px-3 py-2 text-sm bg-background focus:outline-none focus:ring-2 focus:ring-primary/30"
                            type="password"
                            placeholder="Enter password"
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
                        Login
                    </button>
                </form>

                {/* Divider */}
                <div className="my-6 flex items-center gap-3">
                    <div className="h-px flex-1 bg-border" />
                    <span className="text-xs text-muted-foreground">OR</span>
                    <div className="h-px flex-1 bg-border" />
                </div>

                {/* Google */}
                <button
                    onClick={handleGoogleLogin}
                    className="w-full flex items-center justify-center gap-2 border rounded-lg py-2 text-sm hover:bg-muted transition">
                    <img
                        src="https://www.svgrepo.com/show/475656/google-color.svg"
                        className="h-5 w-5"
                    />
                    Continue with Google
                </button>

                {/* Footer */}
                <p className="text-center text-xs text-muted-foreground mt-6">
                    Don’t have an account?{" "}
                    <Link
                        to="/register"
                        className="text-primary hover:underline">
                        Sign up
                    </Link>
                </p>
            </div>
        </div>
    )
}
