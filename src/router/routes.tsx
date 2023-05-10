import Home from "../pages/Home"
import type { PathRouteProps } from "react-router-dom"

export const routes: Array<PathRouteProps> = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/page:page/perPage:perPage",
    element: <Home />,
  },
]
