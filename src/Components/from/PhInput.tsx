import { useFormContext } from "react-hook-form";

const PhInput = ({ type, name }) => {
  const { register } = useFormContext();
  return (
    <input
      //   placeholder="Enter Your Password"
      className="border rounded-lg px-3 py-2 mb-5 text-sm w-full outline-none dark:border-gray-500 dark:bg-gray-900"
      type={type} // Updated type to "password"
      id={name}
      defaultValue={"admin1234"}
      {...register(name)}
    />
  );
};

export default PhInput;
