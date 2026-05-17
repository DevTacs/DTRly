import {createFileRoute} from "@tanstack/react-router"

export const Route = createFileRoute("/_layout/_public/login")({
    component: RouteComponent,
})

function RouteComponent() {
    return <div>Hello "/_layout/_public/login"!</div>
}
