import {
  monthOptions,
  semesterNameOptions,
} from "@/Components/const/academicSemester";
import PhFrom from "@/Components/from/PhFrom";
import PhSelect from "@/Components/from/PhSelect";
import { Button } from "antd";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { academicSemesterSchema } from "@/Components/Schema/academicManagement";
import { useCreateAcademicSemesterMutation } from "@/redux/futures/admin/academicSemester/academicManagement";
import { toast } from "sonner";
import { TResponse } from "@/types/all";
const CreateAcademicSemester = () => {
  const year = new Date().getFullYear();
  console.log(year);
  const [createAcademicSemester] = useCreateAcademicSemesterMutation();
  const yearOptions = [0, 1, 2, 3, 4, 5].map((number) => ({
    label: String(year + number),
    value: String(year + number),
  }));

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const tostId = toast.loading("Creating.............");
    const name = semesterNameOptions[Number(data.name) - 1].label;
    const semesterData = {
      name,
      code: data.name,
      year: data.year,
      startingMonth: data.startingMonth,
      endingMonth: data.endingMonth,
    };
    console.log(semesterData);
    try {
      const res = (await createAcademicSemester(semesterData)) as TResponse;
      if (res.error) {
        toast.error(res.error?.data?.message, { id: tostId });
      } else {
        toast.success("Semester Create Success");
      }
      console.log(res);
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      toast.error("Academic Semester Create Felid", { id: tostId });
    }
  };

  return (
    <div className="max-w-80 mx-auto ">
      <PhFrom
        onSubmit={onSubmit}
        resolver={zodResolver(academicSemesterSchema)}
      >
        <PhSelect
          name="name"
          label={"Academic Semester"}
          options={semesterNameOptions}
        ></PhSelect>
        <PhSelect name="year" label={"Year"} options={yearOptions}></PhSelect>
        <PhSelect
          name="startingMonth"
          label={"Start Month"}
          options={monthOptions}
        ></PhSelect>

        <PhSelect
          name="endingMonth"
          label={"End Month"}
          options={monthOptions}
        ></PhSelect>

        <Button htmlType="submit">Submit</Button>
      </PhFrom>
    </div>
  );
};

export default CreateAcademicSemester;
