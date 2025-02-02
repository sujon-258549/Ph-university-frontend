import Dashboard from "@/Pages/admin/Dashboard";
import CreateAdmin from "@/Pages/supperAdmin/CreateAdmin";

export const supperAdmntPath = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: <Dashboard />,
  },
  {
    name: "Admin Management",
    children: [
      {
        name: "admin",
        path: "create-Admin",
        element: <CreateAdmin />,
      },
    ],
  },
];

export default supperAdmntPath;
