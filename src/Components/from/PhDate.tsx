import { DatePicker, Form } from "antd";
import { Controller } from "react-hook-form";
interface PhInputProps {
  name: string;
  label?: string;
}
const PhDate: React.FC<PhInputProps> = ({ name, label }) => {
  return (
    <div className="w-full">
      <Controller
        name={name}
        render={({ field }) => (
          <Form.Item label={label} style={{ width: "100%" }}>
            {" "}
            <DatePicker {...field} style={{ width: "100%" }} />
          </Form.Item>
        )}
      />
    </div>
  );
};

export default PhDate;
