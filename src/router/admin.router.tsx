import AcademicDepartment from "@/Pages/AcademicManagement/AcademicDepartment";
import AcademicSemester from "@/Pages/AcademicManagement/AcademicSemester";
import CreateAcademicDepartment from "@/Pages/AcademicManagement/CreateAcademicDepartment";
import CreateAcademicSemester from "@/Pages/AcademicManagement/CreateAcademicSemester";
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
        name: "Crate A-Semester",
        path: "Crate-Academic-Semester",
        element: <CreateAcademicSemester />,
      },
      {
        name: "Academic Semester",
        path: "Academic-Semester",
        element: <AcademicSemester />,
      },
      {
        name: "Create A-Semester",
        path: "Create-Academic-Semester",
        element: <CreateAcademicDepartment />,
      },
      {
        name: "Academic Department",
        path: "Academic-Department",
        element: <AcademicDepartment />,
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
