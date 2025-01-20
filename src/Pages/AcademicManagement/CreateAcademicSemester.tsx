import PhFrom from "@/Components/from/PhFrom";
import PhSelect from "@/Components/from/PhSelect";
import { Button } from "antd";
import { FieldValues, SubmitHandler } from "react-hook-form";

const CreateAcademicSemester = () => {
  const semesterNameOptions = [
    { label: "Autom", value: "01" },
    { label: "Summer", value: "02" },
    { label: "Fall", value: "03" },
  ];
  const monthOptions = [
    { label: "January", value: "January" },
    { label: "February", value: "February" },
    { label: "March", value: "March" },
    { label: "April", value: "April" },
    { label: "May", value: "May" },
    { label: "June", value: "June" },
    { label: "July", value: "July" },
    { label: "August", value: "August" },
    { label: "September", value: "September" },
    { label: "October", value: "October" },
    { label: "November", value: "November" },
    { label: "December", value: "December" },
  ];

  const year = new Date().getFullYear();
  console.log(year);

  const yearOptions = [0, 1, 2, 3, 4, 5].map((number) => ({
    label: String(year + number),
    value: String(year + number),
  }));

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    const name = semesterNameOptions[Number(data.name) - 1].label;
    const semesterData = {
      name,
      code: data.name,
      year: data.year,
      statindMonth: data.statindMonth,
      endingMonth: data.endingMonth,
    };
    console.log(semesterData);
  };

  return (
    <div className="max-w-80 mx-auto ">
      <PhFrom onSubmit={onSubmit}>
        <PhSelect
          name="name"
          label={"Academic Semester"}
          options={semesterNameOptions}
        ></PhSelect>
        <PhSelect name="year" label={"Year"} options={yearOptions}></PhSelect>
        <PhSelect
          name="statindMonth"
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
