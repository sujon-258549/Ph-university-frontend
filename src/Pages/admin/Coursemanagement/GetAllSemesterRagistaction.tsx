import Loader from "@/Components/Loader/Loader";
import { useGatAllAcademicFacultyQuery } from "@/redux/futures/admin/academicManagement";
import { useGetAllRagistactionSemesterRagistactionQuery } from "@/redux/futures/admin/courseManagement";
import { TAcademicFaculty, TQuery, TTextAndValue } from "@/types/all";
import { Button, Table, TableColumnsType, TableProps } from "antd";
import { useState } from "react";

const GetAllSemesterRagistaction = () => {
  const [params, setParams] = useState<TQuery[] | undefined>(undefined);
  interface DataType {
    key: React.Key;
    name: string;
  }

  const {
    data: academicFacultyData,
    isLoading,
    isFetching,
  } = useGetAllRagistactionSemesterRagistactionQuery(params);

  const academicFaculty = academicFacultyData?.data?.result?.map(
    ({
      _id,
      status,
      academicSemester,
      startDate,
      endDate,
    }: TAcademicFaculty) => ({
      key: _id,
      status,
      name: academicSemester?.name,
      endDate,
      startDate,
    })
  );

  type QueryData = {
    name: string;
  };
  const queryData: TTextAndValue[] = [];
  academicFaculty?.map(({ name }: QueryData) =>
    queryData.push({ text: name, value: name })
  );

  const columns: TableColumnsType<DataType> = [
    {
      title: "Academic Semester",
      dataIndex: "name",
      showSorterTooltip: { target: "full-header" },
      filters: queryData.map(({ text, value }) => ({
        text: text, // or just "text" if key and value are the same
        value: value, // or just "value"
      })),
      onFilter: (value, record) => record.name === value,
      sortDirections: ["descend"],
      //   onFilter: (value, record) => record.name.indexOf(value as string) === 0,
      //   sortDirections: ["descend"],
    },
    {
      title: "Status",
      dataIndex: "status",
    },
    {
      title: "StartDate",
      dataIndex: "startDate",
    },
    {
      title: "End Date",
      dataIndex: "endDate",
    },
    {
      title: "Status",
      dataIndex: "status",
    },
    {
      title: "Action",
      key: "K",
      render: () => {
        return (
          <>
            <Button>Update</Button> <Button>Update</Button>
          </>
        );
      },
    },
  ];

  if (isLoading) {
    return <Loader></Loader>;
  }

  const onChange: TableProps<DataType>["onChange"] = (
    _pagination,
    filters,
    _sorter,
    extra
  ) => {
    if (extra.action === "filter") {
      const queryParams: TQuery[] = [];
      filters?.name?.forEach((item) =>
        queryParams.push({ name: "name", value: item })
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

export default GetAllSemesterRagistaction;
