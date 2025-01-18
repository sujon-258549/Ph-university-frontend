import PhFrom from "@/Components/from/PhFrom";
import PhInput from "@/Components/from/PhInput";
import { useLoginMutation } from "@/redux/futures/auth/authApi";
import { setUser, TUser } from "@/redux/futures/auth/authSlice";
import { useAppDispatch } from "@/redux/futures/hooks";
import { varifytoken } from "@/Utils/jwtVerified";
import { FieldValues, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
const Login = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [login, { data, error }] = useLoginMutation();
  console.log("data", data, " error", error);
  //   const onSubmit = async (data: FieldValues) => {
  //     const tostId = toast.loading("Login in", { duration: 2000 });
  //     try {
  //       const userInfo = {
  //         id: data.id,
  //         password: data.password,
  //       };
  //       // token tek
  //       const res = await login(userInfo).unwrap(); // unwrap use and data to data open
  //       const user = varifytoken(res.data.accessToken) as TUser;
  //       dispatch(setUser({ user: user, token: res.data.accessToken }));
  //       toast.success("Login Success", { id: tostId, duration: 2000 });
  //       navigate(`/admin/dashboard`); //this time hardcoded role user route all create and this time create user role
  //       // eslint-disable-next-line @typescript-eslint/no-unused-vars
  //     } catch (err) {
  //       toast.error("something is wrong", { id: tostId, duration: 2000 });
  //     }
  //   };

  return (
    <div>
      <PhFrom>
        <PhInput type={"text"} name={"id"}></PhInput>
        <PhInput type={"text"} name={"password"}></PhInput>
      </PhFrom>
    </div>
  );
};

export default Login;
