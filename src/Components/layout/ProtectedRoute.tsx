import { selectCurrentUser } from "@/redux/futures/auth/authSlice";
import { useAppSelector } from "@/redux/futures/hooks";
import { ReactNode } from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }: { children: ReactNode }) => {
  const token = useAppSelector(selectCurrentUser);
  if (!token) {
    return <Navigate to={"/login"} replace={true} />;
  }
  return children;
};

export default ProtectedRoute;
