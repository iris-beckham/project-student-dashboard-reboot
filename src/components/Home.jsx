import { useState, useEffect } from "react";
import { getAllStudents } from "../api/fetch";

export const Home = () => {
  const [students, setStudents] = useState([]);
  useEffect(() => {
    getAllStudents().then((data) => setStudents(data));
  }, []);

  return (
    <div>
      {students.map(({ id, names, username, dob, profilePhoto }) => (
        <li key={id}>
          <img src={profilePhoto} alt={names.preferredName} />
          <h2>
            {`${names.preferredName} ${names.middleName} ${names.surname} `}
          </h2>
          <p>{username}</p>
          <p>{dob}</p>
        </li>
      ))}
    </div>
  );
};
