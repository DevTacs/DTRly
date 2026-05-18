import type {RouterContext} from "@/configs/router.config"
import {createFileRoute, Outlet, redirect} from "@tanstack/react-router"

export const Route = createFileRoute("/_layout/_private")({
    beforeLoad: ({context, location}) => {
        const typedContext = context as RouterContext
        const {user} = typedContext.auth
        console.log(user)
        if (!user) {
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
