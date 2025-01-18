import { Input } from "antd";
import { Controller } from "react-hook-form";
interface PhInputProps {
  placeholder: string;
  type?: string;
  name: string;
  className?: string;
}
const PhInput: React.FC<PhInputProps> = ({ placeholder, type, name }) => {
  return (
    <div className="">
      <Controller
        name={name}
        render={({ field }) => (
          <Input {...field} placeholder={placeholder} type={type} id={name} />
        )}
      />
    </div>
  );
};

export default PhInput;
