import PhFrom from "@/Components/from/PhFrom";
import PhInput from "@/Components/from/PhInput";
import { studentSchema } from "@/Components/Schema/userManagement";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "antd";
import { FieldValues, SubmitHandler } from "react-hook-form";

const CreateStudent = () => {
  const onsubmit: SubmitHandler<FieldValues> = (data) => {
    const fromData = new FormData();
    fromData.append("data", JSON.stringify(data));
  };
  return (
    <PhFrom onSubmit={onsubmit} resolver={zodResolver(studentSchema)}>
      <PhInput
        name="name"
        placeholder="Enter Your First Name"
        label="First Name"
        type="text"
      ></PhInput>
      <PhInput
        name="name"
        placeholder="Enter Your First Name"
        label="First Name"
        type="text"
      ></PhInput>
      <PhInput
        name="name"
        placeholder="Enter Your First Name"
        label="First Name"
        type="text"
      ></PhInput>
      <PhInput
        name="name"
        placeholder="Enter Your First Name"
        label="First Name"
        type="text"
      ></PhInput>
      <PhInput
        name="name"
        placeholder="Enter Your First Name"
        label="First Name"
        type="text"
      ></PhInput>
      <PhInput
        name="name"
        placeholder="Enter Your First Name"
        label="First Name"
        type="text"
      ></PhInput>
      <PhInput
        name="name"
        placeholder="Enter Your First Name"
        label="First Name"
        type="text"
      ></PhInput>
      <PhInput
        name="name"
        placeholder="Enter Your First Name"
        label="First Name"
        type="text"
      ></PhInput>
      <PhInput
        name="name"
        placeholder="Enter Your First Name"
        label="First Name"
        type="text"
      ></PhInput>
      <PhInput
        name="name"
        placeholder="Enter Your First Name"
        label="First Name"
        type="text"
      ></PhInput>
      <PhInput
        name="name"
        placeholder="Enter Your First Name"
        label="First Name"
        type="text"
      ></PhInput>
      <PhInput
        name="name"
        placeholder="Enter Your First Name"
        label="First Name"
        type="text"
      ></PhInput>
      <PhInput
        name="name"
        placeholder="Enter Your First Name"
        label="First Name"
        type="text"
      ></PhInput>
      <PhInput
        name="name"
        placeholder="Enter Your First Name"
        label="First Name"
        type="text"
      ></PhInput>
      <PhInput
        name="name"
        placeholder="Enter Your First Name"
        label="First Name"
        type="text"
      ></PhInput>
      <PhInput
        name="name"
        placeholder="Enter Your First Name"
        label="First Name"
        type="text"
      ></PhInput>
      <PhInput
        name="name"
        placeholder="Enter Your First Name"
        label="First Name"
        type="text"
      ></PhInput>
      <PhInput
        name="name"
        placeholder="Enter Your First Name"
        label="First Name"
        type="text"
      ></PhInput>
      <PhInput
        name="name"
        placeholder="Enter Your First Name"
        label="First Name"
        type="text"
      ></PhInput>
      <PhInput
        name="name"
        placeholder="Enter Your First Name"
        label="First Name"
        type="text"
      ></PhInput>
      <PhInput
        name="name"
        placeholder="Enter Your First Name"
        label="First Name"
        type="text"
      ></PhInput>
      <PhInput
        name="name"
        placeholder="Enter Your First Name"
        label="First Name"
        type="text"
      ></PhInput>
      <PhInput
        name="name"
        placeholder="Enter Your First Name"
        label="First Name"
        type="text"
      ></PhInput>
      <PhInput
        name="name"
        placeholder="Enter Your First Name"
        label="First Name"
        type="text"
      ></PhInput>
      <PhInput
        name="name"
        placeholder="Enter Your First Name"
        label="First Name"
        type="text"
      ></PhInput>
      <PhInput
        name="name"
        placeholder="Enter Your First Name"
        label="First Name"
        type="text"
      ></PhInput>
      <PhInput
        name="name"
        placeholder="Enter Your First Name"
        label="First Name"
        type="text"
      ></PhInput>
      <PhInput
        name="name"
        placeholder="Enter Your First Name"
        label="First Name"
        type="text"
      ></PhInput>
      <PhInput
        name="name"
        placeholder="Enter Your First Name"
        label="First Name"
        type="text"
      ></PhInput>
      <PhInput
        name="name"
        placeholder="Enter Your First Name"
        label="First Name"
        type="text"
      ></PhInput>
      <PhInput
        name="name"
        placeholder="Enter Your First Name"
        label="First Name"
        type="text"
      ></PhInput>
      <PhInput
        name="name"
        placeholder="Enter Your First Name"
        label="First Name"
        type="text"
      ></PhInput>
      <Button htmlType="submit">Submit</Button>
    </PhFrom>
  );
};

export default CreateStudent;
