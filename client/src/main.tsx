import {StrictMode} from "react"
import ReactDOM from "react-dom/client"
import App from "./app"
import "./index.css"
import router from "./configs/router.config"
import {queryClient} from "./configs/query.config"
import {QueryClientProvider} from "@tanstack/react-query"

// Render the app
const rootElement = document.getElementById("root")!
if (!rootElement.innerHTML) {
    const root = ReactDOM.createRoot(rootElement)
    root.render(
        <StrictMode>
            <QueryClientProvider client={queryClient}>
                <App router={router} />
            </QueryClientProvider>{" "}
        </StrictMode>,
    )
}
