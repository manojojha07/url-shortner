import { createRoute } from "@tanstack/react-router"
import { rootRoute } from "./RouteTree"
import DashboardPage from "../pages/DashBoardPage"
import {checkAuth} from '../utils/helper.js'

export const dasboardRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: '/dashboard',
    component: DashboardPage,
    beforeLoad: checkAuth
})