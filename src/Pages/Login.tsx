import { useLoginMutation } from "@/redux/futures/auth/authApi";
import { setUser } from "@/redux/futures/auth/authSlice";
import { useAppDispatch } from "@/redux/futures/hooks";
import { varifytoken } from "@/Utils/jwtVerified";
import { useForm } from "react-hook-form";

const Login = () => {
  const dispatch = useAppDispatch();
  const { register, handleSubmit } = useForm(); // Correct initialization
  const [login, { data, error }] = useLoginMutation();
  console.log("data", data, " error", error);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSubmit = async (data: any) => {
    const userInfo = {
      id: data.id,
      password: data.password,
    };
    // token tek
    const res = await login(userInfo).unwrap(); // unwrap use and data to data open
    const user = varifytoken(res.data.accessToken);
    dispatch(setUser({ user: user, token: res.data.accessToken }));
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="relative py-3 sm:max-w-xs sm:mx-auto">
          <div className="min-h-96 px-8 py-6 mt-4 text-left bg-white dark:bg-gray-900 rounded-xl shadow-lg">
            <div className="flex flex-col justify-center items-center h-full select-none">
              <div className="flex flex-col items-center justify-center gap-2 mb-8">
                <div className="w-8 h-8 bg-gray-700"></div>
                <p className="m-0 text-[16px] font-semibold dark:text-white">
                  Login to your Account
                </p>
                <span className="m-0 text-xs max-w-[90%] text-center text-[#8B8E98]">
                  Get started with our app, just start your session and enjoy
                  the experience.
                </span>
              </div>
              <div className="w-full flex flex-col gap-2">
                <label
                  htmlFor="username"
                  className="font-semibold text-xs text-gray-400"
                >
                  Username
                </label>
                <input
                  placeholder="Username"
                  className="border rounded-lg px-3 py-2 mb-5 text-sm w-full outline-none dark:border-gray-500 dark:bg-gray-900"
                  defaultValue={"SA-0001"}
                  type="text"
                  id="id"
                  {...register("id")} // Updated name for better semantics
                />
              </div>
            </div>
            <div className="w-full flex flex-col gap-2">
              <label
                htmlFor="password"
                className="font-semibold text-xs text-gray-400"
              >
                Password
              </label>
              <input
                placeholder="Enter Your Password"
                className="border rounded-lg px-3 py-2 mb-5 text-sm w-full outline-none dark:border-gray-500 dark:bg-gray-900"
                type="text" // Updated type to "password"
                id="password"
                defaultValue={"supperadmin1234"}
                {...register("password")}
              />
            </div>
            <div>
              <button
                type="submit"
                className="py-1 px-8 bg-blue-500 hover:bg-blue-800 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg cursor-pointer select-none"
              >
                Login
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
