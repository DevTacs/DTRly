import type {RouterContext} from "@/configs/router.config"
import {createFileRoute, Outlet, redirect} from "@tanstack/react-router"

export const Route = createFileRoute("/_private")({
    beforeLoad: ({context, location}) => {
        // if not logged in → block access
        const typedContext = context as RouterContext

        if (!typedContext.auth.user) {
            throw redirect({
                to: "/login",
                search: {
                    redirect: location.href,
                },
            })
        }
    },

    component: () => {
        return <Outlet />
    },
})
