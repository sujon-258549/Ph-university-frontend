import Dashboard from "@/Pages/admin/Dashboard";
import GetMyOfferdCourse from "@/Pages/Student/GetMyOfferdCourse";

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
        name: "Enroll Course",
        path: "enroll-course",
        element: <GetMyOfferdCourse />,
      },
    ],
  },
];

export default studentPath;
