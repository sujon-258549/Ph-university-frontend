import { selectCurrentUser } from "@/redux/futures/auth/authSlice";
import { useAppSelector } from "@/redux/futures/hooks";
import adminPath from "@/router/admin.router";
import { sidebarItemsGenerator } from "@/Utils/sidebarItemsGenerator";
import { Layout, Menu } from "antd";
const { Sider } = Layout;
const userRole = {
  ADMIN: "admin",
  FACULTY: "faculty",
  STUDENT: "student",
};
const Sidebar = () => {
  const user = useAppSelector(selectCurrentUser);
  let sidebarItems;
  //   @ts-expect-error abc
  switch (user?.JwtPayload?.userRole) {
    case userRole.ADMIN:
      //   @ts-expect-error abc
      sidebarItems = sidebarItemsGenerator(adminPath, userRole.ADMIN);
      break;

    default:
      break;
  }

  return (
    <Sider
      style={{ height: "100vh", position: "sticky", left: "0", top: "0" }}
      breakpoint="lg"
      collapsedWidth="0"
      onBreakpoint={(broken) => {
        console.log(broken);
      }}
      onCollapse={(collapsed, type) => {
        console.log(collapsed, type);
      }}
    >
      <div className="text-center text-white h-5 py-7 font-bold text-xl">
        Ph University
      </div>
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["4"]}
        //   @ts-expect-error abc
        items={sidebarItems}
      />
    </Sider>
  );
};

export default Sidebar;
