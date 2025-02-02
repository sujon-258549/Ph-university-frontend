import { logOut, selectCurrentToken } from "@/redux/futures/auth/authSlice";
import { useAppSelector } from "@/redux/futures/hooks";
import { varifytoken } from "@/Utils/jwtVerified";
import { ReactNode } from "react";
import { useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";

type TChildrenAndRole = {
  children: ReactNode;
  role: string | undefined;
};
const ProtectedRoute = ({ children, role }: TChildrenAndRole) => {
  //   const userRole = useAppSelector(selectCurrentUser);
  const token = useAppSelector(selectCurrentToken);
  //   const tokenRole = userRole?.JwtPayload?.userRole;
  //   const dispatch = useDispatch();
  let user;
  if (token) {
    user = varifytoken(token);
  }
  //   @ts-expect-error-for token
  const UserRole = user?.JwtPayload?.userRole;
  console.log({ UserRole, role });
  if (role !== undefined && role !== UserRole) {
    return <Navigate to={"/login"} replace={true} />;
    // dispatch(logOut());
  }
  if (!token) {
    return <Navigate to={"/login"} replace={true} />;
  }
  return children;
};

export default ProtectedRoute;
