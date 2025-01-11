import App from "@/App";
import Contact from "../Pages/Contact";
import Login from "../Pages/Login";
import Registration from "../Pages/Registration";
import { createBrowserRouter } from "react-router-dom";
import adminPath from "./admin.router";
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
    path: "admin",
    element: <App></App>,
    children: adminPath,
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
