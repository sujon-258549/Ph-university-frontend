import Loader from "@/Components/Loader/Loader";
import Notfound from "@/Components/Notfound/Notfound";
import { useGetAllSemesterQuery } from "@/redux/futures/admin/academicSemester/academicManagement";
import { TAcademicSemester, TQuery } from "@/types/all";
import { Button, Table, TableColumnsType, TableProps } from "antd";
import { DataSourceItemType } from "antd/es/auto-complete";
import { useState } from "react";

const month = [
  { text: "January", value: "January" },
  { text: "February", value: "February" },
  { text: "March", value: "March" },
  { text: "April", value: "April" },
  { text: "May", value: "May" },
  { text: "June", value: "June" },
  { text: "July", value: "July" },
  { text: "August", value: "August" },
  { text: "September", value: "September" },
  { text: "October", value: "October" },
  { text: "November", value: "November" },
  { text: "December", value: "December" },
];

const AcademicSemester = () => {
  const [params, setParams] = useState<TQuery[] | undefined>(undefined);
  //   const [params, setParams] = useState<{ name: string; value: string }[]>([]);
  console.log(params);
  type DataType = Pick<
    TAcademicSemester,
    "name" | "year" | "code" | "startingMonth" | "endingMonth"
  >;

  const {
    data: semesterData,
    isLoading,
    isFetching,
  } = useGetAllSemesterQuery(params);
  // @ts-expect-error abc
  const tableData = semesterData?.data?.result?.map(
    ({
      _id,
      name,
      code,
      startingMonth,
      endingMonth,
      year,
    }: TAcademicSemester) => ({
      key: _id,
      name,
      code,
      year,
      startingMonth,
      endingMonth,
    })
  );

  const columns: TableColumnsType<DataType> = [
    {
      title: "Name",
      key: "name",
      dataIndex: "name",
      showSorterTooltip: { target: "full-header" },
      filters: [
        {
          text: "Autom",
          value: "Autom",
        },
        {
          text: "Summer",
          value: "Summer",
        },
        {
          text: "Fall",
          value: "Fall",
        },
      ],
      onFilter: (value, record) => record.name.indexOf(value as string) === 0,
      sortDirections: ["descend"],
    },
    {
      title: "Code",
      key: "code",
      dataIndex: "code",
      filters: [
        {
          text: "01",
          value: "01",
        },
        {
          text: "02",
          value: "02",
        },
        {
          text: "03",
          value: "03",
        },
      ],
      onFilter: (value, record) => record.code === value,
      sortDirections: ["descend"],
    },
    {
      title: "Year",
      key: "year",
      dataIndex: "year",
      filters: [
        {
          text: "2024",
          value: "2024",
        },
        {
          text: "2025",
          value: "2025",
        },
        {
          text: "2026",
          value: "2026",
        },
        {
          text: "2027",
          value: "2027",
        },
        {
          text: "2028",
          value: "2028",
        },
        {
          text: "2029",
          value: "2029",
        },
        {
          text: "2030",
          value: "2030",
        },
      ],
      onFilter: (value, record) => record.year === value,
      sortDirections: ["descend"],
    },
    {
      title: "Start Month",
      key: "startingMonth",
      dataIndex: "startingMonth",
      filters: month,
      onFilter: (value, record) => record.startingMonth === value,
      sortDirections: ["descend"],
      //   sorter: (a, b) => a.age - b.age,
    },
    {
      title: "End Month",
      key: "endingMonth",
      dataIndex: "endingMonth",

      filters: month,
      onFilter: (value, record) => record.endingMonth === value,
      sortDirections: ["descend"],
    },
    {
      title: "Action",
      key: "X",
      render: () => {
        return (
          <>
            <Button>Update</Button>
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
      filters.name?.forEach((item) => {
        queryParams.push({ name: "name", value: item });
      });
      setParams(queryParams);
    }
  };
  return (
    <>
      {semesterData?.data?.result.length > 0 ? (
        <Table<DataSourceItemType>
          loading={isFetching}
          columns={columns}
          dataSource={tableData}
          onChange={onChange}
          showSorterTooltip={{ target: "sorter-icon" }}
        />
      ) : (
        <Notfound children={"Academic Semester Not Found"}></Notfound>
      )}
    </>
  );
};

export default AcademicSemester;
