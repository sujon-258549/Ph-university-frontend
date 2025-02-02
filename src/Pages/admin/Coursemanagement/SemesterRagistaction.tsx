/* eslint-disable @typescript-eslint/no-explicit-any */
import { RagistactionStatus } from "@/Components/const/academicSemester";
import PhFrom from "@/Components/from/PhFrom";
import PhSelect from "@/Components/from/PhSelect";
import { Button } from "antd";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { useGetAllSemesterQuery } from "@/redux/futures/admin/academicManagement";
import { toast } from "sonner";
import PhInput from "@/Components/from/PhInput";
import { TResponse } from "@/types/all";

import {
  useCreateRagistactionMutation,
  useGetAllRagistactionSemesterRagistactionQuery,
} from "@/redux/futures/admin/courseManagement";

type TAcademicDepartment = {
  name: string;
  _id: string;
  year: number;
};
const SemesterRagistaction = () => {
  const [createRagistaction] = useCreateRagistactionMutation();
  const { data: academicSemester } = useGetAllSemesterQuery([
    {
      name: "sort",
      value: "year",
    },
  ]);
  const { data: ragistactionacademicSemester } =
    useGetAllRagistactionSemesterRagistactionQuery(undefined);
  console.log(ragistactionacademicSemester);
  // @ts-expect-error abc
  const acadimecdepertdata = academicSemester?.data?.result.map(
    ({ _id, name, year }: TAcademicDepartment) => ({
      label: `${name}-${year}`,
      value: _id,
    })
  );
  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const tostId = toast.loading("Creating.............");
    const semesterData = {
      ...data,
      maxCredit: Number(data.maxCredit),
      minCredit: Number(data.minCredit),
    };
    console.log(semesterData);
    try {
      const res = (await createRagistaction(semesterData)) as TResponse<any>;
      if (res.error) {
        toast.error(res.error?.data?.message, { id: tostId, duration: 2000 });
      } else {
        toast.success("Semester Ragistaction  Success");
      }
      toast.caller(tostId);
      console.log(res);
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      toast.error("Semester Ragistaction  Felid", {
        id: tostId,
        duration: 2000,
      });
    }
  };

  return (
    <div className="max-w-80 mx-auto ">
      <PhFrom
        onSubmit={onSubmit}
        // resolver={zodResolver(academicSemesterSchema)}
      >
        <PhSelect
          mode={undefined}
          name="academicSemester"
          label={"Academic Semester"}
          options={acadimecdepertdata}
        ></PhSelect>
        <PhSelect
          mode={undefined}
          name="status"
          label={"Status"}
          options={RagistactionStatus}
        ></PhSelect>

        <PhInput
          label="Start Date"
          type="date"
          placeholder="Enter your start date"
          name="startDate"
        ></PhInput>
        <PhInput
          label="End Date"
          type="date"
          placeholder="Enter your end date"
          name="endDate"
        ></PhInput>
        <PhInput
          label="Min Credit"
          type="number"
          placeholder="Enter your min credit"
          name="minCredit"
        ></PhInput>
        <PhInput
          label="Max Credit"
          type="number"
          placeholder="Enter your max credit"
          name="maxCredit"
        ></PhInput>

        <Button htmlType="submit">Submit</Button>
      </PhFrom>
    </div>
  );
};

export default SemesterRagistaction;

// /* eslint-disable @typescript-eslint/no-explicit-any */

// import { Button } from "antd";
// import { FieldValues, SubmitHandler } from "react-hook-form";
// import { useGetAllSemesterQuery } from "@/redux/futures/admin/academicManagement";
// import { toast } from "sonner";
// import { TResponse } from "@/types/all";
// import { useCreateRagistactionMutation } from "@/redux/futures/admin/courseManagement";
// import PhFrom from "@/Components/from/PhFrom";
// import PhSelect from "@/Components/from/PhSelect";
// import PhInput from "@/Components/from/PhInput";
// import { RagistactionStatus } from "@/Components/const/academicSemester";

// type TAcademicDepartment = {
//   name: string;
//   _id: string;
//   year: number;
// };

// const SemesterRegistration = () => {
//   const [createRegistration] = useCreateRagistactionMutation();
//   const { data: academicSemester } = useGetAllSemesterQuery([
//     { name: "sort", value: "year" },
//   ]);

//   // Transform API response
//   const academicDepartmentData =
//     //   @ts-expect-error abc
//     academicSemester?.data?.result.map(
//       ({ _id, name, year }: TAcademicDepartment) => ({
//         label: `${name} - ${year}`,
//         value: _id,
//       })
//     ) || [];

//   const onSubmit: SubmitHandler<FieldValues> = async (data) => {
//     const toastId = toast.loading("Creating Registration...");
//     const createRagistactionData = {
//       ...data,
//       maxCredit: Number(data.maxCredit),
//       minCredit: Number(data.minCredit),
//     };
//     console.log(createRagistactionData);
//     try {
//       const res = (await createRegistration(
//         createRagistactionData
//       )) as TResponse<any>;

//       if (res.error) {
//         toast.error(res.error?.data?.message?.toString() || "Error occurred", {
//           id: toastId,
//           duration: 2000,
//         });
//       } else {
//         toast.success("Semester Registration Successful!", { id: toastId });
//       }
//       // eslint-disable-next-line @typescript-eslint/no-unused-vars
//     } catch (error) {
//       toast.error("Semester Registration Failed", {
//         id: toastId,
//         duration: 2000,
//       });
//     }
//   };

//   return (
//     <div className="w-full max-w-lg mx-auto">
//       <PhFrom onSubmit={onSubmit}>
//         <PhSelect
//           name="academicSemester"
//           label="Academic Semester"
//           options={academicDepartmentData}
//         />
//         <PhSelect name="status" label="Status" options={RagistactionStatus} />
//         <PhInput
//           label="Start Date"
//           type="date"
//           placeholder="Enter start date"
//           name="startDate"
//         />
//         <PhInput
//           label="End Date"
//           type="date"
//           placeholder="Enter end date"
//           name="endDate"
//         />
//         <PhInput
//           label="Min Credit"
//           type="number"
//           placeholder="Enter min credit"
//           name="minCredit"
//         />
//         <PhInput
//           label="Max Credit"
//           type="number"
//           placeholder="Enter max credit"
//           name="maxCredit"
//         />
//         <Button htmlType="submit">Submit</Button>
//       </PhFrom>
//     </div>
//   );
// };

// export default SemesterRegistration;
