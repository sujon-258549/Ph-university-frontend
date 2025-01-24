import Loader from "@/Components/Loader/Loader";
import { useGatAllAcademicFacultyQuery } from "@/redux/futures/admin/academicSemester/academicManagement";
import { TAcademicFaculty, TQuery } from "@/types/all";
import { Button, Table, TableColumnsType, TableProps } from "antd";
import { useState } from "react";

const AcademicFaculty = () => {
  const [params, setParams] = useState<TQuery[] | undefined>(undefined);
  interface DataType {
    key: React.Key;
    name: string;
  }

  const {
    data: academicFacultyData,
    isLoading,
    isFetching,
  } = useGatAllAcademicFacultyQuery(params);

  const academicFaculty = academicFacultyData?.data.map(
    ({ _id, name }: TAcademicFaculty) => ({
      key: _id,
      name,
    })
  );

  type QueryData = {
    name: string;
  };
  const queryData: TQuery[] = [];
  academicFaculty.map(({ name }: QueryData) =>
    queryData.push({ text: name, value: name })
  );
  console.log(queryData);

  const columns: TableColumnsType<DataType> = [
    {
      title: "Name",
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

export default AcademicFaculty;
