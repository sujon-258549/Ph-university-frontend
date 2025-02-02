import { Form, Select } from "antd";
import React, { useEffect } from "react";
import { Controller, useFormContext, useWatch } from "react-hook-form";

interface Label {
  label?: string;
  name: string;
  options: { value: string; label: string }[] | undefined;
  disabled?: boolean;
  mode: "multiple" | undefined;
}

const PhSelectWithWatch: React.FC<Label> = ({
  label,
  name,
  options,
  mode,
  disabled,
  onValueChange,
}) => {
  const { control } = useFormContext();
  const inputValue = useWatch({
    control,
    name,
  });
  useEffect(() => {
    onValueChange(inputValue);
  }, [inputValue, onValueChange]);

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

export default PhSelectWithWatch;
