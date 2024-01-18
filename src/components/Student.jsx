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

      {/* Remember to put the table in it's own component */}
      <div>
        <table>
          <tr>
            <th>Codewars</th>
            <th>Scores</th>
            <th>Certifications</th>
          </tr>
          <tr>
            <td>Current Total:</td>
            <td>Assignments:</td>
            <td>Resume:</td>
          </tr>
          <tr>
            <td>Last Week:</td>
            <td>Projects:</td>
            <td>LinkedIn:</td>
          </tr>
          <tr>
            <td>Goal:</td>
            <td>Assessments:</td>
            <td>Mock Interview:</td>
          </tr>
          <tr>
            <td>Percent of Goal Achieved:</td>
            <td></td>
            <td>Github:</td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default Student;
