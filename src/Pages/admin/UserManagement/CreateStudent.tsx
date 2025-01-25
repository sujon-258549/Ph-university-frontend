import PhFrom from "@/Components/from/PhFrom";
import PhInput from "@/Components/from/PhInput";
import PhSelect from "@/Components/from/PhSelect";
import {
  useGetAllacademicDepartmentQuery,
  useGetAllSemesterQuery,
} from "@/redux/futures/admin/academicSemester/academicManagement";
import { Button, Col, Divider, Row } from "antd";
import { FieldValues, SubmitHandler } from "react-hook-form";
const bloodGroups = [
  { label: "A+", value: "A+" },
  { label: "A-", value: "A-" },
  { label: "B+", value: "B+" },
  { label: "B-", value: "B-" },
  { label: "AB+", value: "AB+" },
  { label: "AB-", value: "AB-" },
  { label: "O+", value: "O+" },
  { label: "O-", value: "O-" },
];

const gender = [
  { label: "Male", value: "Male" },
  { label: "Female", value: "Female" },
  { label: "Other", value: "Other" },
];

// const informaction = {
//   password: "student1234",
//   student: {
//     // name: {
//     //   firstName: "S",
//     //   middleName: "mia.",
//     //   lastName: "sujon",
//     // },
//     // email: "sn2555.johnson@example.com", //not user
//     // dateOfBirth: "2011-06-25",
//     // gender: "Female",
//     // phone: "01898765432",
//     // address: "456 Maple Avenue, Uptown, Springfield",
//     // grade: "8",
//     // section: "B",
//     // enrolledDate: "2022-01-10",
//     // guardian: {
//     //   guardianName: "Michael Johnson",
//     //   guardianPhone: "+8801722334455",
//     // },
//     // nationality: "American",
//     // religion: "Islam",
//     // hobbies: ["Reading", "Swimming"],
//     // extracurriculars: ["Debate Club", "Science Fair"],
//     // previousSchool: "Sunrise High School",
//     // emergencyContact: "+8801888997766",
//     // bloodGroup: "B+",
//     attendancePercentage: 92.3,
//     marks: {
//       Science: 89,
//       Math: 95,
//       Geography: 88,
//     },
//     admitionSamester: "67751aa097baa8b3e98634ee",
//     acadimicDepertment: "67752e7c69b3e3329a4fce51",
//     comments: "Demonstrates excellent leadership skills and teamwork.",
//   },
// };

type TAcademicDepartment = {
  _id: string;
  name: string;
};
const CreateStudent = () => {
  const { data: acadimecdepertment } = useGetAllacademicDepartmentQuery([]);
  const { data: academicDepartment } = useGetAllSemesterQuery([]);
  // @ts-expect-error abc
  const acadimecdepertdata = acadimecdepertment?.data?.result.map(
    ({ _id, name }: TAcademicDepartment) => ({
      name: _id,
      value: name,
    })
  );
  // @ts-expect-error abc
  const academicSemesterData = academicDepartment?.data?.result.map(
    ({ _id, name }: TAcademicDepartment) => ({
      name: _id,
      value: name,
    })
  );
  const onsubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data);
    // const fromData = new FormData();
    // fromData.append("data", JSON.stringify(data));
  };
  return (
    <PhFrom onSubmit={onsubmit}>
      <Divider>Personal Information</Divider>
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
      <Row gutter={8}>
        <Col span={24} lg={{ span: 8 }}>
          <PhSelect name="gender" label="Gender" options={gender}></PhSelect>
        </Col>
        <Col span={24} lg={{ span: 8 }}>
          <PhInput
            className="w-full"
            name="dateOfBirth"
            placeholder="Enter Your Date of Barth"
            label="Date of Barth"
            type="text"
          ></PhInput>
        </Col>
        <Col span={24} lg={{ span: 8 }}>
          <PhSelect
            name="bloodGroup"
            label="Blood Group"
            options={bloodGroups}
          ></PhSelect>
        </Col>
      </Row>
      <Divider>Contact Information</Divider>
      <Row gutter={8}>
        <Col span={24} lg={{ span: 8 }}>
          <PhInput
            className="w-full"
            name="email"
            placeholder="Enter Your Email"
            label="Email"
            type="Email"
          ></PhInput>
        </Col>
        <Col span={24} lg={{ span: 8 }}>
          <PhInput
            className="w-full"
            name="phone"
            placeholder="Enter Your Phone"
            label="Phone"
            type="number"
          ></PhInput>
        </Col>
        <Col span={24} lg={{ span: 8 }}>
          <PhInput
            name="emergencyContact"
            label="Emergency Contact"
            placeholder="Enter Your Emergency Contact "
            type="number"
          ></PhInput>
        </Col>
      </Row>
      <Row gutter={8}>
        <Col span={24}>
          <PhInput
            className="w-full"
            name="address"
            placeholder="Enter Your address"
            label="Address"
            type="text"
          ></PhInput>
        </Col>
      </Row>
      <Divider>Gradient Information</Divider>
      <Row gutter={12}>
        <Col span={24} lg={{ span: 12 }}>
          <PhInput
            className="w-full"
            name="guardian.guardianName"
            placeholder="Enter Your Guardian Name"
            label="Guardian Name"
            type="text"
          ></PhInput>
        </Col>
        <Col span={24} lg={{ span: 12 }}>
          <PhInput
            className="w-full"
            name="guardian.guardianPhone"
            placeholder="Enter Your Guardian Phone"
            label="Guardian Phone"
            type="number"
          ></PhInput>
        </Col>
      </Row>

      <Divider>Other Information</Divider>
      <Row gutter={8}>
        <Col span={24} lg={{ span: 8 }}>
          <PhInput
            className="w-full"
            name="grade"
            placeholder="Enter Your grade"
            label="Grade"
            type="text"
          ></PhInput>
        </Col>
        <Col span={24} lg={{ span: 8 }}>
          <PhInput
            className="w-full"
            name="section"
            placeholder="Enter Your Section"
            label="Section"
            type="text"
          ></PhInput>
        </Col>
        <Col span={24} lg={{ span: 8 }}>
          <PhInput
            name="enrolledDate"
            label="Enrolled Date"
            placeholder="Enter Your Enrolled Date "
            type="Date"
          ></PhInput>
        </Col>
      </Row>
      <Row gutter={8}>
        <Col span={24} lg={{ span: 8 }}>
          <PhInput
            className="w-full"
            name="nationality"
            placeholder="Enter Your Nationality"
            label="Nationality"
            type="text"
          ></PhInput>
        </Col>
        <Col span={24} lg={{ span: 8 }}>
          <PhInput
            className="w-full"
            name="religion"
            placeholder="Enter Your Religion"
            label="Religion"
            type="text"
          ></PhInput>
        </Col>
        <Col span={24} lg={{ span: 8 }}>
          <PhInput
            name="hobbies"
            label="Hobbies"
            placeholder="Enter Your Hobbies "
            type="text"
          ></PhInput>
        </Col>
      </Row>
      <Row gutter={8}>
        <Col span={24} lg={{ span: 8 }}>
          <PhInput
            className="w-full"
            name="extracurriculars"
            placeholder="Enter Your Extracurricular"
            label="Extracurricular"
            type="text"
          ></PhInput>
        </Col>
        <Col span={24} lg={{ span: 8 }}>
          <PhInput
            className="w-full"
            name="previousSchool"
            placeholder="Enter Your previousSchool"
            label="PreviousSchool"
            type="text"
          ></PhInput>
        </Col>
        <Col span={24} lg={{ span: 8 }}>
          <PhInput
            name="attendancePercentage"
            label="Attendance Percentage"
            placeholder="Enter Your Attendance Percentage"
            type="number"
          ></PhInput>
        </Col>
      </Row>
      <Row gutter={8}>
        <Col span={24} lg={{ span: 8 }}>
          <PhSelect
            name="admitionSamester"
            options={academicSemesterData}
            label="Addition Semester"
          ></PhSelect>
        </Col>
        <Col span={24} lg={{ span: 8 }}>
          <PhSelect
            name="acadimicDepertment"
            label="Addition Semester"
            options={acadimecdepertdata}
          ></PhSelect>
        </Col>
        <Col span={24} lg={{ span: 8 }}>
          <PhInput
            name="comments"
            label="Comments"
            placeholder="Enter Your Comments"
            type="text"
          ></PhInput>
        </Col>
      </Row>

      <Button className="w-full" htmlType="submit">
        Submit
      </Button>
    </PhFrom>
  );
};

export default CreateStudent;
