/* eslint-disable @typescript-eslint/no-explicit-any */
import PhFrom from "@/Components/from/PhFrom";
import PhSelect from "@/Components/from/PhSelect";
import { Button } from "antd";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { toast } from "sonner";
import PhInput from "@/Components/from/PhInput";
import { TResponse } from "@/types/all";

import {
  useCreatecourseMutation,
  useGetAllCourseQuery,
} from "@/redux/futures/admin/courseManagement";

type TAcademicDepartment = {
  name?: string;
  title?: string;
  _id: string;
  year: number;
};
const CreateCourse = () => {
  const [createcourse] = useCreatecourseMutation();
  //   const { data: academicSemester } = useGetAllSemesterQuery([
  //     {
  //       name: "sort",
  //       value: "year",
  //     },
  //   ]);
  const { data: allCourse } = useGetAllCourseQuery(undefined);
  console.log(allCourse);
  const acadimecdepertdata = allCourse?.data?.map(
    ({ _id, title }: TAcademicDepartment) => ({
      label: `${title}`,
      value: _id,
    })
  );
  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const tostId = toast.loading("Creating.............");
    const semesterData = {
      ...data,
      cod: Number(data.cod),
      credits: Number(data.credits),
      isDeleted: false,
      preRepusiteCousere: data.preRepusiteCousere.map((item) => ({
        course: item,
        isDeleted: false,
      })),
    };
    console.log(semesterData);

    console.log(semesterData);
    try {
      const res = (await createcourse(semesterData)) as TResponse<any>;
      if (res.error) {
        toast.error(res.error?.data?.message, { id: tostId, duration: 2000 });
      } else {
        toast.success("create course  Success");
      }
      toast.caller(tostId);
      console.log(res);
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      toast.error("create course  Felid", {
        id: tostId,
        duration: 2000,
      });
    }
  };

  return (
    <div>
      <div
        className="max-w-[450px] mx-auto  border border-black p-5 bg-slate-400"
        style={{ borderRadius: "10px" }}
      >
        <PhFrom
          onSubmit={onSubmit}
          // resolver={zodResolver(academicSemesterSchema)}
        >
          <PhInput
            label="Title"
            type="text"
            placeholder="Enter your title"
            name="title"
          ></PhInput>
          <PhInput
            label="Prefix"
            type="text"
            placeholder="Enter your prefix"
            name="prifix"
          ></PhInput>
          <PhInput
            label="Cod"
            type="number"
            placeholder="Enter your cod"
            name="cod"
          ></PhInput>
          <PhInput
            label="Credit"
            type="number"
            placeholder="Enter your credit"
            name="credits"
          ></PhInput>
          <PhSelect
            mode="multiple"
            name="preRepusiteCousere"
            label={"Academic Semester"}
            options={acadimecdepertdata}
          ></PhSelect>
          <Button className="w-full" htmlType="submit">
            Submit
          </Button>
        </PhFrom>
      </div>
    </div>
  );
};

export default CreateCourse;
