import {createRouter} from "@tanstack/react-router"
import type {User} from "@/types/auth.type"
import {routeTree} from "@/routeTree.gen"

export type RouterContext = {
    auth: {
        user: User | null
    }
}

// // Register the router context type globally
// declare module "@tanstack/react-router" {
//     interface Register {
//         router: {
//             context: RouterContext
//         }
//     }
// }

const router = createRouter({
    routeTree,
    context: {} as RouterContext,
})

export default router

export type Router = typeof router
