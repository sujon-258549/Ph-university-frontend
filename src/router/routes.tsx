import App from "@/App";
import Contact from "../Pages/Contact";
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
        path: "contact",
        element: <Contact />,
      },
    ],
  },

  {
    path: "/admin",
    element: <App></App>,
    children: routeGenerator(adminPath),
  },

  {
    path: "login",
    element: <Login />,
  },
  {
    path: "register",
    element: <Registration />,
  },
]);

export default router;
