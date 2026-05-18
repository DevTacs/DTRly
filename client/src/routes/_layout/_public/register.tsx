import {createFileRoute, Link} from "@tanstack/react-router"
import {useState} from "react"

export const Route = createFileRoute("/_layout/_public/register")({
    component: RegisterPage,
})

function RegisterPage() {
    const [form, setForm] = useState({
        firstName: "",
        middleName: "",
        lastName: "",
        email: "",
        password: "",
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }))
    }

    const handleRegister = (e: React.FormEvent) => {
        e.preventDefault()
        console.log(form)
    }

    const handleGoogleSignup = () =>
        (window.location.href = import.meta.env.VITE_GOOGLE_AUTH)

    return (
        <div className="w-full max-w-md">
            <div className="border bg-card shadow-sm rounded-2xl p-8">
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
                <form onSubmit={handleRegister} className="space-y-4">
                    <div className="grid grid-cols-2 gap-3">
                        <div>
                            <label className="text-sm font-medium">
                                First name
                            </label>
                            <input
                                name="firstName"
                                value={form.firstName}
                                onChange={handleChange}
                                className="mt-1 w-full rounded-lg border px-3 py-2 text-sm bg-background"
                            />
                        </div>

                        <div>
                            <label className="text-sm font-medium">
                                Middle name
                            </label>
                            <input
                                name="middleName"
                                value={form.middleName}
                                onChange={handleChange}
                                className="mt-1 w-full rounded-lg border px-3 py-2 text-sm bg-background"
                            />
                        </div>
                    </div>

                    <div>
                        <label className="text-sm font-medium">Last name</label>
                        <input
                            name="lastName"
                            value={form.lastName}
                            onChange={handleChange}
                            className="mt-1 w-full rounded-lg border px-3 py-2 text-sm bg-background"
                        />
                    </div>

                    <div>
                        <label className="text-sm font-medium">Email</label>
                        <input
                            name="email"
                            type="email"
                            value={form.email}
                            onChange={handleChange}
                            className="mt-1 w-full rounded-lg border px-3 py-2 text-sm bg-background"
                        />
                    </div>

                    <div>
                        <label className="text-sm font-medium">Password</label>
                        <input
                            name="password"
                            type="password"
                            value={form.password}
                            onChange={handleChange}
                            className="mt-1 w-full rounded-lg border px-3 py-2 text-sm bg-background"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-primary text-white py-2 rounded-lg text-sm font-medium hover:opacity-90 transition">
                        Create account
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
