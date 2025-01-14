import CreateAdmin from "@/Pages/admin/CreateAdmin";
import CreateFaculty from "@/Pages/admin/CreateFaculty";
import CreateStudent from "@/Pages/admin/CreateStudent";
import Dashboard from "@/Pages/admin/Dashboard";
// import { ReactNode } from "react";
// import { NavLink } from "react-router-dom";
// type TRoute = {
//   path: string;
//   element: ReactNode;
// };

export const adminPath = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: <Dashboard />,
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

// export const adminRouter = adminPath.reduce((acc: TRoute[], item) => {
//   if (item.path && item.element) {
//     acc.push({
//       path: item.path,
//       element: item.element,
//     });
//   }
//   if (item.children) {
//     item.children.forEach((child) => {
//       acc.push({
//         path: child.path,
//         element: item.element,
//       });
//     });
//   }

//   return acc;
// }, []);
// export const adminsideberitems = adminPath.reduce(
//   (acc: TSidebarItems[], item) => {
//     if (item.path && item.element) {
//       acc.push({
//         key: item.name,
//         label: <NavLink to={`/admin/${item.path}`}>{item.name}</NavLink>,
//       });
//     }
//     if (item.children) {
//       acc.push({
//         key: item.name,
//         label: item.name,
//         children: item.children.map((child) => ({
//           key: child.name,
//           label: <NavLink to={`/admin/${child.path}`}>{child.name}</NavLink>,
//         })),
//       });
//     }

//     return acc;
//   },
//   []
// );

export default adminPath;
