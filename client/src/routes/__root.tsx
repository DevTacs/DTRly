import * as React from "react"
import {Outlet, createRootRoute} from "@tanstack/react-router"

export const Route = createRootRoute({
    component: RootComponent,
})

function RootComponent() {
    return (
        <React.Fragment>
            <header className="sticky top-0 z-50 h-16 border-b bg-sidebar/95 backdrop-blur border-sidebar-border text-sidebar-foreground">
                <div className="flex h-full items-center justify-between px-6">
                    {/* Logo */}
                    <h2 className="text-xl font-bold tracking-tight flex items-center ">
                        DTR.
                        <span className="text-sidebar-primary">ly</span>
                    </h2>

                    {/* Navigation */}
                    <nav className="flex items-center gap-6 text-sm font-medium">
                        <a
                            href="#"
                            className="hover:text-sidebar-primary transition">
                            Dashboard
                        </a>
                        <a
                            href="#"
                            className="hover:text-sidebar-primary transition">
                            Templates
                        </a>
                        <a
                            href="#"
                            className="hover:text-sidebar-primary transition">
                            Export
                        </a>
                    </nav>
                </div>
            </header>
            <Outlet />
        </React.Fragment>
    )
}
