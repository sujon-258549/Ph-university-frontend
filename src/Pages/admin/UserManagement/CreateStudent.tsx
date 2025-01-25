import PhFrom from "@/Components/from/PhFrom";
import PhInput from "@/Components/from/PhInput";
import { studentSchema } from "@/Components/Schema/userManagement";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Col, Row } from "antd";
import { FieldValues, SubmitHandler } from "react-hook-form";

const CreateStudent = () => {
  const onsubmit: SubmitHandler<FieldValues> = (data) => {
    const fromData = new FormData();
    fromData.append("data", JSON.stringify(data));
  };
  return (
    <PhFrom onSubmit={onsubmit} resolver={zodResolver(studentSchema)}>
      <Row gutter={8}>
        <Col span={24} lg={{ span: 8 }}>
          <PhInput
            className="w-full"
            name="name.firstName"
            placeholder="Enter Your First Name"
            label="First Name"
            type="text"
          ></PhInput>
        </Col>
        <Col span={24} lg={{ span: 8 }}>
          <PhInput
            className="w-full"
            name="name.middleName"
            placeholder="Enter Your Middle Name"
            label="middle Name"
            type="text"
          ></PhInput>
        </Col>
        <Col span={24} lg={{ span: 8 }}>
          <PhInput
            className="w-full"
            name="name.lastName"
            placeholder="Enter Your Last Name"
            label="Last Name"
            type="text"
          ></PhInput>
        </Col>
      </Row>

      <Button htmlType="submit">Submit</Button>
    </PhFrom>
  );
};

export default CreateStudent;
