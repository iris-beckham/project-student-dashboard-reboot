import { getOneStudent } from "../api/fetch";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Student = () => {
  const { id } = useParams();
  //   console.log(id);
  const [student, setStudent] = useState([]);

  useEffect(() => {
    getOneStudent(id).then((data) => setStudent(data));
  }, []);

  //   console.log();
  return <div>Student</div>;
};

export default Student;
