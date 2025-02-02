import { days } from "@/Components/const/days";
import PhFrom from "@/Components/from/PhFrom";
import PhInput from "@/Components/from/PhInput";
import PhSelect from "@/Components/from/PhSelect";
import PhSelectWithWatch from "@/Components/from/PhSelectWithWatch";
import {
  useGatAllAcademicFacultyQuery,
  useGetAllacademicDepartmentQuery,
} from "@/redux/futures/admin/academicManagement";
import {
  useGetAllCourseQuery,
  useGetAllRagistactionSemesterRagistactionQuery,
} from "@/redux/futures/admin/courseManagement";
import { useGetAllFacultyQuery } from "@/redux/futures/admin/userMamagement";
import { Button } from "antd";
import { useState } from "react";
import { FieldValues, SubmitHandler } from "react-hook-form";

const OffedCourse = () => {
  const [disabaltvalue, setdisabaltvalue] = useState();
  console.log(disabaltvalue);
  // academic Semester
  const { data: allSemesterRegistration } =
    useGetAllRagistactionSemesterRagistactionQuery(undefined);
  const allSemesterRagistractionData =
    allSemesterRegistration?.data?.result.map(
      ({
        _id,
        academicSemester,
      }: {
        _id: string;
        academicSemester: string;
      }) => ({
        // @ts-expect-error abc
        label: `${academicSemester?.name}-${academicSemester?.year}`,
        value: _id,
      })
    );
  // academic Faculty
  const { data: allAcademicFaculty } = useGatAllAcademicFacultyQuery(undefined);
  const allAcademicFacultyData = allAcademicFaculty?.data?.map(
    ({ _id, name }: { _id: string; name: string }) => ({
      label: `${name}`,
      value: _id,
    })
  );

  // academic Depertment
  const { data: allAcademicDepartment } =
    useGetAllacademicDepartmentQuery(undefined);
  // @ts-expect-error abc
  const allAcademicDepertmentData = allAcademicDepartment?.data?.result.map(
    ({ _id, name }: { _id: string; name: string }) => ({
      label: `${name}`,
      value: _id,
    })
  );
  // faculty
  const { data: allFaculty } = useGetAllFacultyQuery(undefined);
  const allFacultyData = allFaculty?.data?.result.map(
    ({ _id, fullName }: { _id: string; fullName: string }) => ({
      label: `${fullName}`,
      value: _id,
    })
  );
  // academic course
  const { data: allCourse } = useGetAllCourseQuery(undefined);
  const allCourseData = allCourse?.data?.map(
    ({ _id, title }: { _id: string; title: string }) => ({
      label: `${title}`,
      value: _id,
    })
  );
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    const offeredCourseData = {
      ...data,
      maxCapacity: Number(data.maxCapacity),
      section: Number(data.section),
    };
    console.log(offeredCourseData);
  };
  return (
    <div className="max-w-96 mx-auto ">
      <PhFrom
        onSubmit={onSubmit}
        // resolver={zodResolver(academicSemesterSchema)}
      >
        <PhSelectWithWatch
          onValueChange={setdisabaltvalue}
          mode={undefined}
          name="semesterRegistration"
          label={"Semester Registration"}
          options={allSemesterRagistractionData}
        ></PhSelectWithWatch>
        <PhSelect
          mode={undefined}
          name="academicFaculty"
          label={"Academic Faculty"}
          options={allAcademicFacultyData}
        ></PhSelect>
        <PhSelect
          mode={undefined}
          name="academicDepartment"
          label={"Academic Depertment"}
          options={allAcademicDepertmentData}
        ></PhSelect>
        <PhSelect
          mode={undefined}
          name="faculty"
          label={"Faculty"}
          options={allFacultyData}
        ></PhSelect>
        <PhSelect
          mode={undefined}
          name="course"
          label={"Course"}
          options={allCourseData}
        ></PhSelect>

        <PhInput
          label="Max Capacity"
          type="number"
          placeholder="Enter your Max Capacity"
          name="maxCapacity"
        ></PhInput>
        <PhInput
          label="Section"
          type="number"
          placeholder="Enter your section"
          name="section"
        ></PhInput>
        <PhSelect
          mode="multiple"
          name="status"
          label={"Days"}
          options={days}
        ></PhSelect>
        <PhInput
          label="Start Time"
          type="Time"
          placeholder="Enter your start Time"
          name="startTime"
          disabled={!disabaltvalue}
        ></PhInput>
        <PhInput
          label="End Time"
          type="Time"
          placeholder="Enter your End Time"
          name="endTime"
        ></PhInput>

        <Button htmlType="submit">Submit</Button>
      </PhFrom>
    </div>
  );
};

export default OffedCourse;
