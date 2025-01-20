import { Form, Select } from "antd";
import React from "react";
import { Controller } from "react-hook-form";

interface Label {
  label?: string;
  name: string;
  options: { value: string; label: string }[];
}

const PhSelect: React.FC<Label> = ({ label, name, options }) => {
  return (
    <Controller
      name={name}
      render={({ field: { onChange } }) => (
        <Form.Item label={label}>
          <Select
            showSearch
            onChange={onChange}
            placeholder="Select a person"
            filterOption={(input, option) =>
              (option?.label ?? "").toLowerCase().includes(input.toLowerCase())
            }
            options={options}
          />
        </Form.Item>
      )}
    />
  );
};

export default PhSelect;
