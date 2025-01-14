import { Layout } from "antd";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sideber";
const { Header, Content, Footer } = Layout;
const MainLayout = () => {
  return (
    <div>
      <Layout className="" style={{ height: "100vh" }}>
        <Sidebar />
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
