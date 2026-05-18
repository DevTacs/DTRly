import {useQuery} from "@tanstack/react-query"
import {RouterProvider} from "@tanstack/react-router"
import {getLoggedUserAsync} from "./services/auth.service"
import type {Router} from "./configs/router.config"

export default function App({router}: {router: Router}) {
    const {data: user, isLoading} = useQuery({
        queryKey: ["loggedUser"],
        queryFn: getLoggedUserAsync,
        retry: false,
        staleTime: 1000 * 60 * 10, // 10 minutes (important)
        refetchOnWindowFocus: false,
        refetchOnReconnect: false,
    })

    if (isLoading) return <div>Loading...</div>
    return (
        <RouterProvider
            router={router}
            context={{
                auth: {
                    user: user,
                },
            }}
        />
    )
}
