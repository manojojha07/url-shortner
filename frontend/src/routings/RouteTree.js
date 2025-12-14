import { createRootRoute } from "@tanstack/react-router"
import { homePageRoute } from "./HomeRoute"
import { authRoute } from "./AuthRoute"
import { dasboardRoute } from "./DashBoardRoute"
import RootLayout from "../RootLayout"

export const rootRoute = createRootRoute({
    component: RootLayout
})

export const routeTree =rootRoute.addChildren([
    homePageRoute, 
    authRoute, 
    dasboardRoute
])
