import App from "@/App";
import Login from "../Pages/Login";
import Registration from "../Pages/Registration";
import { createBrowserRouter } from "react-router-dom";
import adminPath from "./admin.router";
import { routeGenerator } from "@/Utils/routerGenerator";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/lo",
        element: <Login />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },

  {
    path: "/admin",
    element: <App></App>,
    children: routeGenerator(adminPath),
  },

  {
    path: "register",
    element: <Registration />,
  },
]);

export default router;
