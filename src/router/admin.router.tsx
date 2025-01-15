import AcadimicSamester from "@/Pages/AcadimicManegment/AcadimicSamester";
import CreateAdmin from "@/Pages/admin/CreateAdmin";
import CreateFaculty from "@/Pages/admin/CreateFaculty";
import CreateStudent from "@/Pages/admin/CreateStudent";
import Dashboard from "@/Pages/admin/Dashboard";

export const adminPath = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: <Dashboard />,
  },
  {
    name: "Academic Management",
    children: [
      {
        name: "Academic Semester",
        path: "Academic-Semester",
        element: <AcadimicSamester />,
      },
    ],
  },
  {
    name: "User Management",
    children: [
      {
        name: "Create Student",
        path: "create-student",
        element: <CreateStudent />,
      },
      {
        name: "Create Admin",
        path: "create-admin",
        element: <CreateAdmin />,
      },
      {
        name: "Create Faculty",
        path: "create-faculty",
        element: <CreateFaculty />,
      },
    ],
  },
];

export default adminPath;
