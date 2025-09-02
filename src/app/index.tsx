import { ToastProvider } from "@shared/ui/Toast"
import { AppRouter } from "./providers/AppRouter"
import "./styles/index.scss"
import "@shared/config/i18next"

export function App() {
    return (
        <ToastProvider>
            <AppRouter />
        </ToastProvider>
    )
}