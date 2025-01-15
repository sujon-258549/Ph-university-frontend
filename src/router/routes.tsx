import App from "@/App";
import Contact from "../Pages/Contact";
import Login from "../Pages/Login";
import Registration from "../Pages/Registration";
import { createBrowserRouter } from "react-router-dom";
import adminPath from "./admin.router";
import { routeGenerator } from "@/Utils/routerGenerator";
import ProtectedRoute from "@/Components/layout/ProtectedRoute";
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
    element: (
      <ProtectedRoute>
        <App></App>
      </ProtectedRoute>
    ),
    children: routeGenerator(adminPath),
  },

  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "register",
    element: <Registration />,
  },
]);

export default router;
