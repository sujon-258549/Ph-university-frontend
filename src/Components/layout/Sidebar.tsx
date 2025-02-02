// import { selectCurrentUser } from "@/redux/futures/auth/authSlice";
// import { useAppSelector } from "@/redux/futures/hooks";
// import adminPath from "@/router/admin.router";
// import studentPath from "@/router/Student.router";
// import { sidebarItemsGenerator } from "@/Utils/sidebarItemsGenerator";
// import { Layout, Menu } from "antd";
// import { useEffect, useState } from "react";
// const { Sider } = Layout;

// const Sidebar = () => {
//   const user = useAppSelector(selectCurrentUser);
//   let sidebarItems;
//   //   @ts-expect-error abc
//   const userRoles = user?.JwtPayload?.userRole;
//   const [dynamicSidebar, setdynamicSideber] = useState();
//   console.log(dynamicSidebar);
//   useEffect(() => {
//     if (userRole === "admin") {
//       setDynamicSidebar(adminPath);
//     } else if (userRole === "student") {
//       setDynamicSidebar(studentPath);
//     }
//   }, [userRole]); // Runs only when `userRole` changes
//   switch (userRoles) {
//     case userRoles:
//       sidebarItems = sidebarItemsGenerator(studentPath, userRoles);
//       break;
//     default:
//       break;
//   }

//   return (
//     <Sider
//       style={{ height: "100vh", position: "sticky", left: "0", top: "0" }}
//       breakpoint="lg"
//       collapsedWidth="0"
//       onBreakpoint={(broken) => {
//         console.log(broken);
//       }}
//       onCollapse={(collapsed, type) => {
//         console.log(collapsed, type);
//       }}
//     >
//       <div className="text-center text-white h-5 py-7 font-bold text-xl">
//         Ph University
//       </div>
//       <Menu
//         theme="dark"
//         mode="inline"
//         defaultSelectedKeys={["4"]}
//         //   @ts-expect-error abc
//         items={sidebarItems}
//       />
//     </Sider>
//   );
// };

// export default Sidebar;

import { selectCurrentUser } from "@/redux/futures/auth/authSlice";
import { useAppSelector } from "@/redux/futures/hooks";
import adminPath from "@/router/admin.router";
import studentPath from "@/router/Student.router";
import { sidebarItemsGenerator } from "@/Utils/sidebarItemsGenerator";
import { Layout, Menu } from "antd";
import { useEffect, useState } from "react";

const { Sider } = Layout;

const Sidebar = () => {
  const user = useAppSelector(selectCurrentUser);
  const userRoles = user?.JwtPayload?.userRole;

  const [dynamicSidebar, setDynamicSidebar] = useState<any>(null);

  useEffect(() => {
    if (userRoles === "admin") {
      setDynamicSidebar(adminPath);
    } else if (userRoles === "student") {
      setDynamicSidebar(studentPath);
    }
  }, [userRoles]); // Runs only when `userRoles` changes

  // Generate sidebar items only when `dynamicSidebar` is available
  const sidebarItems = dynamicSidebar
    ? sidebarItemsGenerator(dynamicSidebar, userRoles)
    : [];

  return (
    <Sider
      style={{ height: "100vh", position: "sticky", left: "0", top: "0" }}
      breakpoint="lg"
      collapsedWidth="0"
      onBreakpoint={(broken) => console.log(broken)}
      onCollapse={(collapsed, type) => console.log(collapsed, type)}
    >
      <div className="text-center text-white h-5 py-7 font-bold text-xl">
        Ph University
      </div>
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["4"]}
        items={sidebarItems}
      />
    </Sider>
  );
};

export default Sidebar;
