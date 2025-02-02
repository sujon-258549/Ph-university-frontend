/* eslint-disable @typescript-eslint/no-unused-vars */
import PhFrom from "@/Components/from/PhFrom";
import PhInput from "@/Components/from/PhInput";
import { useChangePasswordMutation } from "@/redux/futures/admin/userMamagement";
import { logOut } from "@/redux/futures/auth/authSlice";
import { useAppDispatch } from "@/redux/futures/hooks";
import { Button } from "antd";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom"; // ✅ Correct usage
import { toast } from "sonner";

const ChangePassword = () => {
  const [changePassword] = useChangePasswordMutation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate(); // ✅ Use this for navigation

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const toastId = toast.loading("Changing password...", { duration: 2000 });

    try {
      const res = await changePassword(data).unwrap(); // ✅ Unwrap RTK Query response

      if (res.success) {
        toast.success("Password Changed Successfully", {
          id: toastId,
          duration: 2000,
        });
        dispatch(logOut());
        navigate("/login"); // ✅ Correct navigation usage
      }
    } catch (error) {
      toast.error("Something went wrong", { id: toastId, duration: 2000 });
    }
  };

  return (
    <div className="w-full md:w-[70%] lg:w-[35%] mx-auto border border-black rounded-[10px] mt-10 p-5">
      <PhFrom onSubmit={onSubmit}>
        <p className="text-3xl text-center pt-5 pb-8">Change Password</p>
        <PhInput
          placeholder="Enter Old Password"
          type="text"
          name="oldPassword"
        />{" "}
        {/* ✅ Secure input */}
        <br />
        <PhInput
          placeholder="Enter New Password"
          type="text"
          name="newPassword"
        />
        <Button htmlType="submit" className="mt-5 w-full">
          Submit
        </Button>
      </PhFrom>
    </div>
  );
};

export default ChangePassword;
