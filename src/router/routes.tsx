import App from "@/App";
import Login from "../Pages/Login";
import Registration from "../Pages/Registration";
import { createBrowserRouter } from "react-router-dom";
import adminPath from "./admin.router";
import { routeGenerator } from "@/Utils/routerGenerator";
import studentPath from "./Student.router";
import facultytPath from "./Faculty.router";
import supperAdmntPath from "./createAdmin.router";
import ProtectedRoute from "@/Components/layout/ProtectedRoute";
import ChangePassword from "@/Pages/ChangePassword/ChangePassword";
const userRole = {
  SupperAdmin: "supperAdmin",
  Admin: "admin",
  Faculty: "faculty",
  Student: "student",
};
const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/supperAdmin",
    element: (
      <ProtectedRoute role={userRole.SupperAdmin}>
        <App></App>
      </ProtectedRoute>
    ),
    children: routeGenerator(supperAdmntPath),
  },
  {
    path: "/admin",
    element: (
      <ProtectedRoute role={userRole.Admin}>
        <App></App>
      </ProtectedRoute>
    ),
    children: routeGenerator(adminPath),
  },
  {
    path: "/student",
    element: (
      <ProtectedRoute role={userRole.Student}>
        <App></App>
      </ProtectedRoute>
    ),
    children: routeGenerator(studentPath),
  },
  {
    path: "/faculty",
    element: (
      <ProtectedRoute role={userRole.Faculty}>
        <App></App>
      </ProtectedRoute>
    ),
    children: routeGenerator(facultytPath),
  },

  {
    path: "register",
    element: <Registration />,
  },
  {
    path: "change-password",
    element: <ChangePassword />,
  },
]);

export default router;
