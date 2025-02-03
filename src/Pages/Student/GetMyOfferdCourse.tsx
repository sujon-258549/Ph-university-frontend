/* eslint-disable @typescript-eslint/no-explicit-any */
import { useGetAllOfferCourseQuery } from "@/redux/futures/admin/courseManagement";
import {
  Key,
  ReactElement,
  JSXElementConstructor,
  ReactNode,
  ReactPortal,
} from "react";

const GetMyOfferdCourse = () => {
  const { data: enrollCourse } = useGetAllOfferCourseQuery(undefined);
  const enrollCourseObject = enrollCourse?.data?.reduce(
    (acc: any, item: any) => {
      const key = item?.course?.title;
      console.log(key);
      acc[key] = acc[key] || { courseTitle: key, section: [] };
      acc[key].section.push({
        section: item.section,
        _id: item._id,
      });
      return acc;
    },
    {}
  );
  const enrollData = enrollCourseObject ? enrollCourseObject : {};
  console.log(enrollData);
  return (
    <div>
      {/* {enrollData.map(
        (item: {
          id: Key | null | undefined;
          courseTitle:
            | string
            | number
            | boolean
            | ReactElement<any, string | JSXElementConstructor<any>>
            | Iterable<ReactNode>
            | ReactPortal
            | null
            | undefined;
        }) => (
          <div key={item.id}>{item.courseTitle}</div>
        )
      )} */}
    </div>
  );
};

export default GetMyOfferdCourse;
