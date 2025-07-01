import { Suspense, lazy } from "react"
import { createRoot } from "react-dom/client"
import "./assets/css/index.css"
import "./i18n.js"

const App = lazy(() => import("./app/index.tsx"))

createRoot(document.getElementById("root")!).render(
    <Suspense fallback={<div>Загрузка приложения...</div>}>
        <App />
    </Suspense>
)