import Loader from "@/Components/Loader/Loader";
import { useGatAllAcademicFacultyQuery } from "@/redux/futures/admin/academicManagement";
import {
  useGetAllRagistactionSemesterRagistactionQuery,
  useUpdataSemesterRagistactionMutation,
} from "@/redux/futures/admin/courseManagement";
import { TAcademicFaculty, TQuery, TTextAndValue } from "@/types/all";
import {
  Button,
  Dropdown,
  Table,
  TableColumnsType,
  TableProps,
  Tag,
} from "antd";
import { useState } from "react";
import moment from "moment";
const GetAllSemesterRagistaction = () => {
  const [updataSemesterRagistaction] = useUpdataSemesterRagistactionMutation();
  const [params, setParams] = useState<TQuery[] | undefined>(undefined);
  interface DataType {
    key: React.Key;
    name: string;
  }

  const items = [
    { label: "UPCOMING", key: "UPCOMING" },
    { label: "ONGOING", key: "ONGOING" },
    { label: "ENDED", key: "ENDED" },
  ];
  const statusColorMap = {
    UPCOMING: "blue",
    ONGOING: "green",
    ENDED: "red",
  };
  const {
    data: academicFacultyData,
    isLoading,
    isFetching,
  } = useGetAllRagistactionSemesterRagistactionQuery(params);

  const academicFaculty = academicFacultyData?.data?.result?.map(
    ({
      _id,
      status,
      name,
      maxCredit,
      minCredit,
      academicSemester,
      startDate,
      endDate,
    }: TAcademicFaculty) => ({
      key: _id,
      status,
      name: `${academicSemester?.name}-${academicSemester?.year}`,
      endDate: moment(new Date(endDate)).format("MMMM"),
      startDate: moment(new Date(startDate)).format("MMMM"),
      maxCredit,
      minCredit,
    })
  );

  type QueryData = {
    name: string;
  };
  const queryData: TTextAndValue[] = [];
  academicFaculty?.map(({ name }: QueryData) =>
    queryData.push({ text: name, value: name })
  );
  const [semesterId, setSemesterId] = useState();
  console.log(semesterId);
  const handleUpdataStatus = (data) => {
    console.log("status", data?.key);
    console.log("id", semesterId);
    const updateDate = {
      id: semesterId,
      data: {
        status: data?.key,
      },
    };
    updataSemesterRagistaction(updateDate);
  };
  const menuProps = {
    items,
    onClick: handleUpdataStatus,
  };
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
      render: (status: string) => (
        <Tag color={statusColorMap[status]}>{status}</Tag>
      ),
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
      title: "Min Credit",
      dataIndex: "minCredit",
    },
    {
      title: "Max Credit",
      dataIndex: "maxCredit",
    },
    {
      title: "Action",
      key: "K",
      render: (itemsData_id) => {
        return (
          <Dropdown menu={menuProps} trigger={["click"]}>
            <Button
              onClick={() => setSemesterId(itemsData_id?.key)}
              className=""
            >
              Update
            </Button>
          </Dropdown>
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
        pagination={false}
      />
    </div>
  );
};

export default GetAllSemesterRagistaction;
