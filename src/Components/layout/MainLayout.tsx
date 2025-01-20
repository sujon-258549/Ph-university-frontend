import { Button, Layout } from "antd";
import { Outlet, useNavigate } from "react-router-dom";
import { useAppDispatch } from "@/redux/futures/hooks";
import { logOut } from "@/redux/futures/auth/authSlice";
import Sidebar from "./Sidebar";
const { Header, Content, Footer } = Layout;
const MainLayout = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const handelLogout = () => {
    dispatch(logOut());
    navigate("/login");
  };
  return (
    <div>
      <Layout className="" style={{ height: "100%" }}>
        <Sidebar />
        <Layout>
          <Header>
            <Button onClick={handelLogout}>Logout</Button>
          </Header>
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
