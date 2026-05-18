import type {RouterContext} from "@/configs/router.config"
import {createFileRoute, Outlet, redirect} from "@tanstack/react-router"

export const Route = createFileRoute("/_layout/_public")({
    component: RouteComponent,
    beforeLoad: ({context, location}) => {
        const typedContext = context as RouterContext
        const {user} = typedContext.auth

        if (user) {
            throw redirect({
                to: "/dtr/intern",
                search: {
                    redirect: location.href,
                },
            })
        }
    },
})

function RouteComponent() {
    return (
        <div className="h-[91vh] overflow-y-hidden bg-muted flex justify-center  items-center">
            <Outlet />
        </div>
    )
}
