import { adminsideberitems } from "@/router/admin.router";
import { Layout, Menu } from "antd";
import { Outlet } from "react-router-dom";
const { Header, Content, Footer, Sider } = Layout;
const MainLayout = () => {
  //   const items: MenuProps["items"] = [
  //     {
  //       key: "/dashboard",
  //       label: <NavLink to={"/admin/dashboard"}>Dashboard</NavLink>,
  //     },
  //     {
  //       key: "/user management",
  //       label: "User Management",
  //       children: [
  //         {
  //           key: "/Create admin",
  //           label: <NavLink to={"/admin/create-admin"}>Create Admin</NavLink>,
  //         },
  //         {
  //           key: "/Create faculty",
  //           label: <NavLink to={"/admin/create-faculty"}>Create Faculty</NavLink>,
  //         },
  //         {
  //           key: "/Create student",
  //           label: <NavLink to={"/admin/create-student"}>Create Student</NavLink>,
  //         },
  //       ],
  //     },
  //   ];
  return (
    <div>
      <Layout className="" style={{ height: "100vh" }}>
        <Sider
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
            items={adminsideberitems}
          />
        </Sider>
        <Layout>
          <Header style={{ padding: 0 }} />
          <Content style={{ margin: "24px 16px 0" }}>
            <div
              style={{
                padding: 24,
                minHeight: 360,
              }}
            >
              <Outlet />
            </div>
          </Content>
          <Footer style={{ textAlign: "center" }}>
            Ant Design ©{new Date().getFullYear()} Created by Ant UED
          </Footer>
        </Layout>
      </Layout>
    </div>
  );
};

export default MainLayout;
