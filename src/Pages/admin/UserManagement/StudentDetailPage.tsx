import { useParams } from "react-router-dom";

const StudentDetailPage = () => {
  const { studentId } = useParams();
  return <div>student Detail page this Id is {studentId}</div>;
};

export default StudentDetailPage;
