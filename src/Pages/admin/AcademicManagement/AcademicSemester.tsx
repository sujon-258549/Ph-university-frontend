import { useGetAllSemesterQuery } from "@/redux/futures/admin/academicSemester/academicManagement";
import { TAcademicSemester } from "@/types/all";
import { Table, TableColumnsType, TableProps } from "antd";
import { DataSourceItemType } from "antd/es/auto-complete";

const AcademicSemester = () => {
  interface DataType {
    key: React.Key;
    name: string;
    age: number;
    address: string;
  }
  const { data: semesterData } = useGetAllSemesterQuery(undefined);
  const tableData = semesterData?.data?.result?.map(
    ({
      _id,
      name,
      code,
      startingMonth,
      endingMonth,
      year,
    }: TAcademicSemester) => ({
      _id,
      name,
      code,
      year,
      startingMonth,
      endingMonth,
    })
  );
  console.log(tableData);
  const columns: TableColumnsType<DataType> = [
    {
      title: "Name",
      dataIndex: "name",
      showSorterTooltip: { target: "full-header" },
      filters: [
        {
          text: "Joe",
          value: "Joe",
        },
        {
          text: "Jim",
          value: "Jim",
        },
        {
          text: "Submenu",
          value: "Submenu",
          children: [
            {
              text: "Green",
              value: "Green",
            },
            {
              text: "Black",
              value: "Black",
            },
          ],
        },
      ],
      // specify the condition of filtering result
      // here is that finding the name started with `value`
      //   onFilter: (value, record) => record.name.indexOf(value as string) === 0,
      //   sorter: (a, b) => a.name.length - b.name.length,
      sortDirections: ["descend"],
    },
    {
      title: "Code",
      dataIndex: "code",
      defaultSortOrder: "descend",
      //   sorter: (a, b) => a.age - b.age,
    },
    {
      title: "Year",
      dataIndex: "year",
      filters: [
        {
          text: "London",
          value: "London",
        },
        {
          text: "New York",
          value: "New York",
        },
      ],
      onFilter: (value, record) =>
        record.address.indexOf(value as string) === 0,
    },
    {
      title: "Start Month",
      dataIndex: "startingMonth",
      defaultSortOrder: "descend",
      //   sorter: (a, b) => a.age - b.age,
    },
    {
      title: "End Month",
      dataIndex: "endingMonth",
      defaultSortOrder: "descend",
      //   sorter: (a, b) => a.age - b.age,
    },
  ];

  const onChange: TableProps<DataType>["onChange"] = (
    pagination,
    filters,
    sorter,
    extra
  ) => {
    console.log(filters);
  };
  return (
    <>
      <Table<DataSourceItemType>
        columns={columns}
        dataSource={tableData}
        onChange={onChange}
        showSorterTooltip={{ target: "sorter-icon" }}
      />
    </>
  );
  //   return (
  //     // <div>
  //     //   <div className="font-[sans-serif] overflow-x-auto">
  //     //     <table className="min-w-full bg-white">
  //     //       <thead className="bg-gray-800 whitespace-nowrap">
  //     //         <tr>
  //     //           <th className="p-4 text-left text-sm font-medium text-white">
  //     //             Name
  //     //           </th>
  //     //           <th className="p-4 text-left text-sm font-medium text-white">
  //     //             Code
  //     //           </th>
  //     //           <th className="p-4 text-left text-sm font-medium text-white">
  //     //             Start Month
  //     //           </th>
  //     //           <th className="p-4 text-left text-sm font-medium text-white">
  //     //             End Month
  //     //           </th>
  //     //           <th className="p-4 text-left text-sm font-medium text-white">
  //     //             Year
  //     //           </th>
  //     //           <th className="p-4 text-left text-sm font-medium text-white">
  //     //             Actions
  //     //           </th>
  //     //         </tr>
  //     //       </thead>
  //     //       <tbody className="whitespace-nowrap">
  //     //         {data?.data?.result?.map(
  //     //           ({
  //     //             name,
  //     //             code,
  //     //             startingMonth,
  //     //             endingMonth,
  //     //             year,
  //     //           }: TAcademicSemester) => (
  //     //             <tr key={data._id} className="even:bg-blue-50">
  //     //               <td
  //     //                 className={`p-4 text-sm ${
  //     //                   name === "Autom"
  //     //                     ? "text-green-500"
  //     //                     : name === "Summer"
  //     //                     ? "text-orange-800"
  //     //                     : name === "Fall"
  //     //                     ? "text-fuchsia-700-500"
  //     //                     : "text-black"
  //     //                 }`}
  //     //               >
  //     //                 {name}
  //     //               </td>
  //     //               <td className="p-4 text-sm text-black">{code}</td>
  //     //               <td className="p-4 text-sm text-black">{startingMonth}</td>
  //     //               <td className="p-4 text-sm text-black">{endingMonth}</td>
  //     //               <td className="p-4 text-sm text-black">{year}</td>
  //     //               <td className="p-4">
  //     //                 <button className="mr-4" title="Edit">
  //     //                   <svg
  //     //                     xmlns="http://www.w3.org/2000/svg"
  //     //                     className="w-5 fill-blue-500 hover:fill-blue-700"
  //     //                     viewBox="0 0 348.882 348.882"
  //     //                   >
  //     //                     <path
  //     //                       d="m333.988 11.758-.42-.383A43.363 43.363 0 0 0 304.258 0a43.579 43.579 0 0 0-32.104 14.153L116.803 184.231a14.993 14.993 0 0 0-3.154 5.37l-18.267 54.762c-2.112 6.331-1.052 13.333 2.835 18.729 3.918 5.438 10.23 8.685 16.886 8.685h.001c2.879 0 5.693-.592 8.362-1.76l52.89-23.138a14.985 14.985 0 0 0 5.063-3.626L336.771 73.176c16.166-17.697 14.919-45.247-2.783-61.418zM130.381 234.247l10.719-32.134.904-.99 20.316 18.556-.904.99-31.035 13.578zm184.24-181.304L182.553 197.53l-20.316-18.556L294.305 34.386c2.583-2.828 6.118-4.386 9.954-4.386 3.365 0 6.588 1.252 9.082 3.53l.419.383c5.484 5.009 5.87 13.546.861 19.03z"
  //     //                       data-original="#000000"
  //     //                     />
  //     //                     <path
  //     //                       d="M303.85 138.388c-8.284 0-15 6.716-15 15v127.347c0 21.034-17.113 38.147-38.147 38.147H68.904c-21.035 0-38.147-17.113-38.147-38.147V100.413c0-21.034 17.113-38.147 38.147-38.147h131.587c8.284 0 15-6.716 15-15s-6.716-15-15-15H68.904C31.327 32.266.757 62.837.757 100.413v180.321c0 37.576 30.571 68.147 68.147 68.147h181.798c37.576 0 68.147-30.571 68.147-68.147V153.388c.001-8.284-6.715-15-14.999-15z"
  //     //                       data-original="#000000"
  //     //                     />
  //     //                   </svg>
  //     //                 </button>
  //     //                 <button className="mr-4" title="Delete">
  //     //                   <svg
  //     //                     xmlns="http://www.w3.org/2000/svg"
  //     //                     className="w-5 fill-red-500 hover:fill-red-700"
  //     //                     viewBox="0 0 24 24"
  //     //                   >
  //     //                     <path
  //     //                       d="M19 7a1 1 0 0 0-1 1v11.191A1.92 1.92 0 0 1 15.99 21H8.01A1.92 1.92 0 0 1 6 19.191V8a1 1 0 0 0-2 0v11.191A3.918 3.918 0 0 0 8.01 23h7.98A3.918 3.918 0 0 0 20 19.191V8a1 1 0 0 0-1-1Zm1-3h-4V2a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v2H4a1 1 0 0 0 0 2h16a1 1 0 0 0 0-2ZM10 4V3h4v1Z"
  //     //                       data-original="#000000"
  //     //                     />
  //     //                     <path
  //     //                       d="M11 17v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Zm4 0v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Z"
  //     //                       data-original="#000000"
  //     //                     />
  //     //                   </svg>
  //     //                 </button>
  //     //               </td>
  //     //             </tr>
  //     //           )
  //     //         )}
  //     //       </tbody>
  //     //     </table>
  //     //   </div>
  //     // </div>
  //   );
};

export default AcademicSemester;
