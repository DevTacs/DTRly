import {useQuery} from "@tanstack/react-query"
import {RouterProvider} from "@tanstack/react-router"
import {getLoggedUserAsync} from "./services/auth.service"
import type {Router} from "./configs/router.config"

export default function App({router}: {router: Router}) {
    const {data: user, isLoading} = useQuery({
        queryKey: ["loggedUser"],
        queryFn: getLoggedUserAsync,
    })

    console.log(user)
    if (isLoading) return <div>Loading...</div>
    return (
        <RouterProvider
            router={router}
            context={{
                auth: {
                    user: user,
                    isLoading,
                },
            }}
        />
    )
}
