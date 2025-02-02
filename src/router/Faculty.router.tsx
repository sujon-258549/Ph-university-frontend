import Dashboard from "@/Pages/admin/Dashboard";
import Student from "@/Pages/admin/UserManagement/Student";

export const facultytPath = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: <Dashboard />,
  },
  {
    name: "All student",
    children: [
      {
        name: "Student",
        path: "student",
        element: <Student />,
      },
    ],
  },
];

export default facultytPath;
