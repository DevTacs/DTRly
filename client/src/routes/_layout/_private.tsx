import {queryClient} from "@/configs/query.config"
import type {RouterContext} from "@/configs/router.config"
import type {User} from "@/types/auth.type"
import {createFileRoute, Outlet, redirect} from "@tanstack/react-router"

export const Route = createFileRoute("/_layout/_private")({
    beforeLoad: ({context, location}) => {
        const typedContext = context as RouterContext
        const {user} = typedContext.auth
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
