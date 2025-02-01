import { Form, Select } from "antd";
import React from "react";
import { Controller } from "react-hook-form";

interface Label {
  label?: string;
  name: string;
  options: { value: string; label: string }[] | undefined;
  disabled?: boolean;
  mode: "multiple" | undefined;
}

const PhSelect: React.FC<Label> = ({
  label,
  name,
  options,
  mode,
  disabled,
}) => {
  return (
    <Controller
      name={name}
      render={({ field: { onChange }, fieldState: { error } }) => (
        <Form.Item label={label}>
          <Select
            mode={mode}
            showSearch
            onChange={onChange}
            placeholder="Select a person"
            disabled={disabled}
            filterOption={(input, option) =>
              (option?.label ?? "").toLowerCase().includes(input.toLowerCase())
            }
            options={options}
          />
          {error && <small>{error.message}</small>}
        </Form.Item>
      )}
    />
  );
};

export default PhSelect;
