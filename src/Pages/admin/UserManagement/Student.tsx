import Loader from "@/Components/Loader/Loader";
import { useGetAllStudentQuery } from "@/redux/futures/admin/userManagement/userCreate";
import { TAcademicFaculty, TQuery, TTextAndValue } from "@/types/all";
import { Button, Table, TableColumnsType, TableProps } from "antd";

const Student = () => {
  interface DataType {
    key: React.Key;
    name: string;
  }

  const {
    data: student,
    isLoading,
    isFetching,
  } = useGetAllStudentQuery(undefined);

  const studentData = student?.data?.result?.map(
    ({
      _id,
      fullname,
      id,
      email,
      //   guardian,
      phone,
      role,
    }: TAcademicFaculty) => ({
      key: _id,
      fullname,
      id,
      //   guardianPhone: guardian?.guardianPhone,
      email,
      phone,
      role,
    })
  );
  console.log(student, studentData);

  type QueryData = {
    name: string;
  };
  const queryData: TTextAndValue[] = [];
  studentData?.map(({ name }: QueryData) =>
    queryData.push({ text: name, value: name })
  );

  const columns: TableColumnsType<DataType> = [
    {
      title: "Name",
      dataIndex: "fullname",
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
      title: "Id",
      key: "id",
      dataIndex: "id",
    },
    {
      title: "Phone",
      key: "phone",
      dataIndex: "phone",
    },
    {
      title: "Email",
      key: "email",
      dataIndex: "email",
    },
    // {
    //   title: "Guardian Phone",
    //   key: "guardianPhone",
    //   dataIndex: "guardianPhone", //guardian
    // },
    {
      title: "Action",
      key: "K",
      render: () => {
        return (
          <>
            <Button>Update</Button> <Button>Detail</Button>
            <Button>status</Button>
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
      //   setParams(queryParams);
    }
  };
  return (
    <div>
      <Table<DataType>
        loading={isFetching}
        columns={columns}
        dataSource={studentData}
        onChange={onChange}
        showSorterTooltip={{ target: "sorter-icon" }}
      />
    </div>
  );
};

export default Student;
