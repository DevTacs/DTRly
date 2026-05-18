import {createFileRoute, Outlet} from "@tanstack/react-router"

export const Route = createFileRoute("/_layout/_public")({
    component: RouteComponent,
})

function RouteComponent() {
    return (
        <div className="h-[91vh] overflow-y-hidden bg-muted flex justify-center  items-center">
            <Outlet />
        </div>
    )
}
