import Loader from "@/Components/Loader/Loader";
import { useGetAllSemesterQuery } from "@/redux/futures/admin/academicSemester/academicManagement";
import { TAcademicSemester, TQuery } from "@/types/all";
import { Button, Table, TableColumnsType, TableProps } from "antd";
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

  const {
    data: semesterData,
    isLoading,
    isFetching,
  } = useGetAllSemesterQuery(params);

  const tableData =
    //   @ts-expect-error abc
    semesterData?.data?.result?.map(
      ({
        _id,
        name,
        code,
        startingMonth,
        endingMonth,
        year,
      }: TAcademicSemester) => ({
        key: _id, // Ensure key is set
        name,
        code,
        year,
        startingMonth,
        endingMonth,
      })
    ) || [];

  const columns: TableColumnsType<TAcademicSemester> = [
    {
      title: "Name",
      dataIndex: "name",
      showSorterTooltip: { target: "full-header" },
      filters: [
        { text: "Autom", value: "Autom" },
        { text: "Summer", value: "Summer" },
        { text: "Fall", value: "Fall" },
      ],
      onFilter: (value, record) => record.name?.startsWith(value as string),
      sortDirections: ["descend"],
    },
    {
      title: "Code",
      dataIndex: "code",
      showSorterTooltip: { target: "full-header" },
      filters: [
        { text: "01", value: "01" },
        { text: "02", value: "02" },
        { text: "03", value: "03" },
      ],
      onFilter: (value, record) => record.code === value,
      sortDirections: ["descend"],
    },
    {
      title: "Year",
      dataIndex: "year",
      showSorterTooltip: { target: "full-header" },
      filters: [
        { text: "2024", value: "2024" },
        { text: "2025", value: "2025" },
        { text: "2026", value: "2026" },
        { text: "2027", value: "2027" },
      ],
      onFilter: (value, record) => record.year === value,
      sortDirections: ["descend"],
    },
    {
      title: "Start Month",
      dataIndex: "startingMonth",
      showSorterTooltip: { target: "full-header" },
      filters: month,
      onFilter: (value, record) => record.startingMonth === value,
      sortDirections: ["descend"],
    },
    {
      title: "End Month",
      dataIndex: "endingMonth",
      showSorterTooltip: { target: "full-header" },
      filters: month,
      onFilter: (value, record) => record.endingMonth === value,
      sortDirections: ["descend"],
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Button onClick={() => console.log(`Update ${record.name}`)}>
          Update
        </Button>
      ),
    },
  ];

  if (isLoading) {
    return <Loader />;
  }

  const onChange: TableProps<TAcademicSemester>["onChange"] = (
    _pagination,
    filters,
    _sorter,
    extra
  ) => {
    if (extra.action === "filter") {
      const queryParams: TQuery[] = [];

      Object.entries(filters).forEach(([key, values]) => {
        values?.forEach((value) => {
          queryParams.push({ name: key, value });
        });
      });

      setParams(queryParams);
    }
  };

  return (
    <Table
      loading={isFetching}
      columns={columns}
      dataSource={tableData}
      onChange={onChange}
      showSorterTooltip={{ target: "sorter-icon" }}
    />
  );
};

export default AcademicSemester;
