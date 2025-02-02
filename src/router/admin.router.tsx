import AcademicDepartment from "@/Pages/admin/AcademicManagement/AcademicDepartment";
import AcademicFaculty from "@/Pages/admin/AcademicManagement/AcademicFaculty";
import AcademicSemester from "@/Pages/admin/AcademicManagement/AcademicSemester";
import CreateAcademicDepartment from "@/Pages/admin/AcademicManagement/CreateAcademicDepartment";
import CreateAcademicFaculty from "@/Pages/admin/AcademicManagement/CreateAcademicFaculty";
import CreateAcademicSemester from "@/Pages/admin/AcademicManagement/CreateAcademicSemester";
import CreateFaculty from "@/Pages/admin/UserManagement/CreateFaculty";
import CreateStudent from "@/Pages/admin/UserManagement/CreateStudent";
import Dashboard from "@/Pages/admin/Dashboard";
import Student from "@/Pages/admin/UserManagement/Student";
import Faculty from "@/Pages/admin/UserManagement/Faculty";
import StudentDetailPage from "@/Pages/admin/UserManagement/StudentDetailPage";
import SemesterRagistaction from "@/Pages/admin/Coursemanagement/SemesterRagistaction";
import GetAllSemesterRagistaction from "@/Pages/admin/Coursemanagement/GetAllSemesterRagistaction";
import CreateCourse from "@/Pages/admin/Coursemanagement/CreateCourse";
import Course from "@/Pages/admin/Coursemanagement/Course";
import OffedCourse from "@/Pages/admin/Coursemanagement/OffedCourse";

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
        name: "Create Faculty",
        path: "create-Faculty",
        element: <CreateFaculty />,
      },
      {
        name: "Faculty",
        path: "Faculty",
        element: <Faculty />,
      },
      {
        name: "Create Student",
        path: "create-student",
        element: <CreateStudent />,
      },
      {
        name: "Student",
        path: "student",
        element: <Student />,
      },
      {
        path: "student/:studentId",
        element: <StudentDetailPage />,
      },
    ],
  },
  {
    name: "Coursemanagement",
    children: [
      {
        name: "Create R course",
        path: "create-Ragistaction-course",
        element: <SemesterRagistaction />,
      },
      {
        name: "Semester R course",
        path: "ragistaction-course",
        element: <GetAllSemesterRagistaction />,
      },
      {
        name: "Create course",
        path: "create-course",
        element: <CreateCourse />,
      },
      {
        name: "Course",
        path: "course",
        element: <Course />,
      },
      {
        name: "Offered Course",
        path: "offered-course",
        element: <OffedCourse />,
      },
    ],
  },
];

export default adminPath;
