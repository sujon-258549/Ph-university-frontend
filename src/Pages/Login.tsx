/* eslint-disable @typescript-eslint/no-unused-vars */
import PhFrom from "@/Components/from/PhFrom";
import PhInput from "@/Components/from/PhInput";
import { useLoginMutation } from "@/redux/futures/auth/authApi";
import {
  selectCurrentToken,
  setUser,
  TUser,
} from "@/redux/futures/auth/authSlice";
import { useAppDispatch, useAppSelector } from "@/redux/futures/hooks";
import { varifytoken } from "@/Utils/jwtVerified";
import { Button } from "antd";
import { useEffect, useState } from "react";
import { FieldValues } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
const Login = () => {
  const token = useAppSelector(selectCurrentToken);
  //   const tokenRole = userRole?.JwtPayload?.userRole;
  //   const dispatch = useDispatch();
  const [userRole, setUserRole] = useState<string | null>(null);

  useEffect(() => {
    if (token) {
      const user = varifytoken(token);
      //   @ts-expect-error abc
      setUserRole(user?.JwtPayload?.userRole);
    }
  }, [token]); // Runs when `token` changes
  console.log(userRole);
  const defaultValues = {
    id: "2025020004",
    password: "123456",
  };
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [login, { data }] = useLoginMutation();
  //   console.log("data", data);
  const onSubmit = async (data: FieldValues) => {
    const tostId = toast.loading("Login in", { duration: 2000 });
    try {
      const userInfo = {
        id: data.id,
        password: data.password,
      };

      // token tek
      const res = await login(userInfo)?.unwrap(); // unwrap use and data to data open
      const user = varifytoken(res?.data?.accessToken) as TUser;
      dispatch(setUser({ user: user, token: res?.data?.accessToken }));
      toast.success("Login Success", { id: tostId, duration: 2000 });
      if (res?.data?.needPasswordChenge) {
        navigate(`/change-password`); //this time hardcoded role user route all create and this time create user role
      } else if (userRole) {
        navigate(`/${userRole}/dashboard`);
      } else {
        toast.error("User role not found", { id: tostId });
      }
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (err) {
      toast.error("something is wrong", { id: tostId, duration: 2000 });
    }
  };

  return (
    <div className="w-full md:w-[70%] lg:w-[35%] mx-auto border-[.75px] rounded-[10px] border-black  mt-10 p-5">
      <PhFrom onSubmit={onSubmit} defaultValues={defaultValues}>
        <PhInput
          placeholder={"Enter Your User id"}
          type={"text"}
          name={"id"}
        ></PhInput>{" "}
        <br />
        <PhInput
          placeholder={"Enter your Password"}
          type={"text"}
          name={"password"}
        ></PhInput>
        <Button htmlType={"submit"} className="mt-5 w-full">
          Submit
        </Button>
      </PhFrom>
    </div>
  );
};

export default Login;
