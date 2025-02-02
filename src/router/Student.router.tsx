import Dashboard from "@/Pages/admin/Dashboard";
import Student from "@/Pages/admin/UserManagement/Student";

export const studentPath = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: <Dashboard />,
  },
  {
    name: "All Student",
    children: [
      {
        name: "Student",
        path: "student",
        element: <Student />,
      },
    ],
  },
];

export default studentPath;
