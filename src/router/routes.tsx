import App from "@/App";
import Login from "../Pages/Login";
import Registration from "../Pages/Registration";
import { createBrowserRouter } from "react-router-dom";
import adminPath from "./admin.router";
import { routeGenerator } from "@/Utils/routerGenerator";
import studentPath from "./Student.router";
const router = createBrowserRouter([
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
    path: "/student",
    element: <App></App>,
    children: routeGenerator(studentPath),
  },

  {
    path: "register",
    element: <Registration />,
  },
]);

export default router;
