import AcademicDepartment from "@/Pages/admin/AcademicManagement/AcademicDepartment";
import AcademicFaculty from "@/Pages/admin/AcademicManagement/AcademicFaculty";
import AcademicSemester from "@/Pages/admin/AcademicManagement/AcademicSemester";
import CreateAcademicDepartment from "@/Pages/admin/AcademicManagement/CreateAcademicDepartment";
import CreateAcademicFaculty from "@/Pages/admin/AcademicManagement/CreateAcademicFaculty";
import CreateAcademicSemester from "@/Pages/admin/AcademicManagement/CreateAcademicSemester";
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
      {
        name: "Create A Faculty",
        path: "Create-Academic-Faculty",
        element: <CreateAcademicFaculty />,
      },
      {
        name: "Academic Faculty",
        path: "Academic-Faculty",
        element: <AcademicFaculty />,
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
