/* eslint-disable @typescript-eslint/no-explicit-any */
import PhFrom from "@/Components/from/PhFrom";
import PhSelect from "@/Components/from/PhSelect";
import Loader from "@/Components/Loader/Loader";
import {
  useAssignFacultyMutation,
  useGetAllCourseQuery,
} from "@/redux/futures/admin/courseManagement";
import { useGetAllFacultyQuery } from "@/redux/futures/admin/userMamagement";
import {
  TAcademicFaculty,
  TQuery,
  TResponse,
  TTextAndValue,
} from "@/types/all";
import { Button, Modal, Table, TableColumnsType, TableProps } from "antd";
import { useState } from "react";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { toast } from "sonner";

const Course = () => {
  const [params, setParams] = useState<TQuery[] | undefined>(undefined);

  interface DataType {
    key: React.Key;
    title: string;
    prifix: string;
    cod: string;
    credits: number;
  }

  const {
    data: academicFacultyData,
    isLoading,
    isFetching,
  } = useGetAllCourseQuery(params);

  const academicFaculty: DataType[] =
    academicFacultyData?.data.map(
      ({ _id, title, cod, prifix, credits }: TAcademicFaculty) => ({
        key: _id,
        title,
        cod,
        prifix,
        credits,
      })
    ) || [];

  console.log(academicFacultyData);

  // Creating filter options from academicFaculty titles
  const queryData: TTextAndValue[] = academicFaculty.map(({ title }) => ({
    text: title,
    value: title,
  }));

  const columns: TableColumnsType<DataType> = [
    {
      title: "Title",
      dataIndex: "title",
      showSorterTooltip: { target: "full-header" },
      filters: queryData,
      onFilter: (value, record) => record.title === value,
      sortDirections: ["descend"],
    },
    {
      title: "Prefix",
      dataIndex: "prifix",
    },
    {
      title: "Cod",
      dataIndex: "cod",
    },
    {
      title: "Credits",
      dataIndex: "credits",
    },
    {
      title: "Action",
      key: "action",
      render: (item) => <CourseModal children={item?.key} />,
    },
  ];

  if (isLoading) {
    return <Loader />;
  }

  const onChange: TableProps<DataType>["onChange"] = (
    _pagination,
    filters,
    _sorter,
    extra
  ) => {
    if (extra.action === "filter") {
      const queryParams: TQuery[] = [];
      filters?.title?.forEach((item) =>
        queryParams.push({ name: "title", value: item })
      );
      setParams(queryParams);
    }
  };

  return (
    <div>
      <Table<DataType>
        loading={isFetching}
        columns={columns}
        dataSource={academicFaculty}
        onChange={onChange}
        showSorterTooltip={{ target: "sorter-icon" }}
      />
    </div>
  );
};

// Fix: PascalCase for component name
const CourseModal = ({ children }: any) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const { data: allfaculty } = useGetAllFacultyQuery([
    { name: "sort", value: "createdAt" },
  ]);
  const acadimecdepertdata = allfaculty?.data?.result?.map(
    ({ _id, name }: { _id: string; name: string }) => ({
      // @ts-expect-error first name or last name
      label: `${name.firstName} ${name.lastName}`,
      value: _id,
    })
  );
  const [assignFaculty] = useAssignFacultyMutation();
  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const tostId = toast.loading("Creating.............");
    const assignFacultyData = {
      courseId: children,
      data,
    };
    console.log(assignFacultyData);
    try {
      const res = (await assignFaculty(assignFacultyData)) as TResponse<any>;
      if (res.error) {
        toast.error(res.error?.data?.message, { id: tostId, duration: 2000 });
      } else {
        toast.success("Assign Faculty Success");
      }
      toast.caller(tostId);
      console.log(res);
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      toast.error("Assign Faculty Felid", {
        id: tostId,
        duration: 2000,
      });
    }
  };
  return (
    <>
      <Button onClick={showModal}>Assign Faculty</Button>
      <Modal
        footer={null}
        title="Assign Faculty"
        onOk={handleOk}
        onCancel={handleCancel}
        open={isModalOpen}
      >
        <PhFrom onSubmit={onSubmit}>
          <PhSelect
            mode="multiple"
            name="facultys"
            label={"Academic Semester"}
            options={acadimecdepertdata}
          ></PhSelect>
          <Button htmlType="submit">Submit</Button>
        </PhFrom>
      </Modal>
    </>
  );
};

export default Course;
