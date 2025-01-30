import Loader from "@/Components/Loader/Loader";
import { useGetAllStudentQuery } from "@/redux/futures/admin/userManagement/userCreate";
import { TAcademicFaculty, TQuery, TTextAndValue } from "@/types/all";
import {
  Button,
  Modal,
  Pagination,
  Table,
  TableColumnsType,
  TableProps,
} from "antd";
import { useState } from "react";
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";

const Student = () => {
  interface DataType {
    key: React.Key;
    name?: string;
    fullname: string;
    id: string;
    phone: string;
    email: string;
    role: string;
  }

  const [selectedStudent, setSelectedStudent] = useState<DataType | null>(null);

  const [page, setPage] = useState(2);
  const {
    data: student,
    isLoading,
    isFetching,
  } = useGetAllStudentQuery([
    // limit problem
    { name: "limit", value: 10 },
    { name: "page", value: page },
    { name: "sort", value: "id" },
  ]);

  const metaData = student?.meta;

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
      render: (item) => {
        return (
          <>
            <Link to={`/admin/student/${item.key}`}>
              <Button>Update</Button>
            </Link>

            {/* <Link to={`/admin/student/${item.key}`}> */}
            <Button onClick={() => setSelectedStudent(item)}>Detail</Button>
            {/* </Link> */}
            <Button>status</Button>
            <Modal
              title="Student Details"
              open={!!selectedStudent}
              onOk={() => setSelectedStudent(null)}
              onCancel={() => setSelectedStudent(null)}
            >
              <p>
                <strong>Name:</strong> {selectedStudent?.fullname}
              </p>
              <p>
                <strong>ID:</strong> {selectedStudent?.id}
              </p>
              <p>
                <strong>Phone:</strong> {selectedStudent?.phone}
              </p>
              <p>
                <strong>Email:</strong> {selectedStudent?.email}
              </p>
            </Modal>
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
      <>
        <Table<DataType>
          pagination={false}
          loading={isFetching}
          columns={columns}
          dataSource={studentData}
          onChange={onChange}
          showSorterTooltip={{ target: "sorter-icon" }}
        />
        <Pagination
          current={page}
          onChange={(pageValue) => setPage(pageValue)}
          pageSize={metaData?.limit}
          total={metaData?.total}
        ></Pagination>
      </>
    </div>
  );
};

export default Student;
