import { Form, Input } from "antd";
import { Controller } from "react-hook-form";
interface PhInputProps {
  placeholder: string;
  type?: string;
  name: string;
  className?: string;
  label?: string;
}
const PhInput: React.FC<PhInputProps> = ({
  placeholder,
  type,
  name,
  label,
}) => {
  return (
    <div className="">
      <Controller
        name={name}
        render={({ field }) => (
          <Form.Item label={label}>
            {" "}
            <Input {...field} placeholder={placeholder} type={type} id={name} />
          </Form.Item>
        )}
      />
    </div>
  );
};

export default PhInput;
