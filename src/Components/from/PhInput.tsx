import { useFormContext } from "react-hook-form";

const PhInput = ({ placeholder, type, name }) => {
  const { register } = useFormContext();
  return (
    <input
      className="bg-[#222630] px-4 py-3 outline-none w-[280px] text-white rounded-lg border-2 transition-colors duration-100 border-solid focus:border-[#596A95] border-[#2B3040]"
      placeholder={placeholder}
      type={type} // Updated type to "password"
      id={name}
      {...register(name)}
    />
  );
};

export default PhInput;
