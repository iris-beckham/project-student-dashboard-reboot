import { getOneStudent } from "../api/fetch";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Student = ({ formattedDateOfBirth }) => {
  const { id } = useParams();

  //   console.log(id);
  const [student, setStudent] = useState({
    names: {
      preferredName: "",
      middleName: "",
      surname: "",
    },
    username: "",
    dob: "",
    profilePhoto: "",
  });

  useEffect(() => {
    getOneStudent(id).then((data) => setStudent(data));
  }, []);

  //   console.log(student);
  const { names, username, dob, profilePhoto } = student;

  return (
    <div>
      <img src={profilePhoto} alt={`${names.preferredName}`} />

      <div>
        <p>{`${names.preferredName} ${names.middleName} ${names.surname}`}</p>
        <p>{`${username}`}</p>
        <p>{formattedDateOfBirth(dob)}</p>
      </div>
    </div>
  );
};

export default Student;
