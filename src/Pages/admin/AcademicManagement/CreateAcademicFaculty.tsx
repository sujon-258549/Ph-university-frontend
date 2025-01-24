import PhFrom from "@/Components/from/PhFrom";
import PhInput from "@/Components/from/PhInput";
import { academicFacultySchema } from "@/Components/Schema/academicFaculty";
import { useCreateAcademicFacultyMutation } from "@/redux/futures/admin/academicSemester/academicManagement";
import { TAcademicSemester, TResponse } from "@/types/all";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "antd";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { toast } from "sonner";

const CreateAcademicFaculty = () => {
  const [createAcademicFaculty] = useCreateAcademicFacultyMutation();
  const onsubmit: SubmitHandler<FieldValues> = async (data) => {
    const tostId = toast.loading("Creating.............");
    const academicFacultyData = {
      name: data.name,
    };
    try {
      const res = (await createAcademicFaculty(
        academicFacultyData
      )) as TResponse<TAcademicSemester>;
      console.log(res);
      console.log(res.error);
      if (res.error) {
        toast.error(res.error?.data?.message, {
          id: tostId,
          duration: 2000,
        });
      } else {
        toast.success("Academic Faculty Create Success");
      }
      console.log(res);
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      toast.error("Academic Faculty Create Felid", {
        id: tostId,
        duration: 2000,
      });
    }
  };
  return (
    <div
      className="border border-black max-w-[400px] mx-auto p-5 rounded-md"
      style={{ borderRadius: "10px" }}
    >
      <PhFrom onSubmit={onsubmit} resolver={zodResolver(academicFacultySchema)}>
        <PhInput
          name="name"
          type="text"
          placeholder="Enter Your Name"
          label="Name"
        ></PhInput>
        <Button className="w-full" htmlType="submit">
          Submit
        </Button>
      </PhFrom>
    </div>
  );
};

export default CreateAcademicFaculty;
