import PhFrom from "@/Components/from/PhFrom";
import PhInput from "@/Components/from/PhInput";
import { academicFacultySchema } from "@/Components/Schema/academicFaculty";
import { useCreateAcademicFacultyMutation } from "@/redux/futures/admin/academicSemester/academicManagement";
import { TAcademicSemester, TResponse } from "@/types/all";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "antd";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const CreateAcademicFaculty = () => {
  const navigate = useNavigate();
  const [createAcademicFaculty] = useCreateAcademicFacultyMutation();

  const onsubmit: SubmitHandler<FieldValues> = async (data) => {
    const toastId = toast.loading("Creating...");
    const academicFacultyData = { name: data.name };

    try {
      const res = (await createAcademicFaculty(
        academicFacultyData
      )) as TResponse<TAcademicSemester>;

      if (res.error) {
        // Show error message if mutation fails
        toast.error(res.error?.data?.message || "Something went wrong.", {
          id: toastId,
          duration: 2000,
        });
      } else {
        // Show success message and navigate
        toast.success("Academic Faculty created successfully!", {
          id: toastId,
        });
        navigate("/admin/Academic-Faculty");
      }
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      // Handle any unexpected errors
      toast.error("Failed to create Academic Faculty.", {
        id: toastId,
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
        />
        <Button className="w-full" htmlType="submit">
          Submit
        </Button>
      </PhFrom>
    </div>
  );
};

export default CreateAcademicFaculty;
