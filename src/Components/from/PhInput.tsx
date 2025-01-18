import { useFormContext } from "react-hook-form";

const PhInput = ({ placeholder, type, name }) => {
  const { register } = useFormContext();
  return (
    <input
      placeholder={placeholder}
      type={type}
      id={name}
      {...register(name)}
      className="relative bg-gray-50ring-0  outline-none border border-neutral-500 text-neutral-900 placeholder-violet-700 text-sm rounded-lg focus:ring-violet-500  focus:border-violet-500 block w-64 p-2.5 checked:bg-emerald-500"
    />
  );
};

export default PhInput;
