import { useState, useEffect } from "react";
import { getAllStudents } from "../api/fetch";

export const Home = () => {
  const [students, setStudents] = useState([]);
  useEffect(() => {
    getAllStudents().then((data) => setStudents(data));
  }, []);

  // const dob = "2"
  const formattedDateOfBirth = (dob) => {
    // Parse the date string
    const dobArray = dob.split("/");
    const month = parseInt(dobArray[0], 10);
    const day = parseInt(dobArray[1], 10);
    const year = parseInt(dobArray[2], 10);

    // Create a Date object
    const formattedDate = new Date(year, month - 1, day);

    // Format the date to "Month day, Year"
    const options = { month: "long", day: "numeric", year: "numeric" };
    const result = formattedDate.toLocaleDateString("en-US", options);
    return result;
  };

  return (
    <div>
      <h1>All Students</h1>
      <h2>Total Students: {students.length}</h2>
      {students.map(({ id, names, username, dob, profilePhoto }) => (
        <li key={id}>
          <img src={profilePhoto} alt={names.preferredName} />
          <h2>
            {`${names.preferredName} ${names.middleName} ${names.surname} `}
          </h2>
          <p>{username}</p>
          <p>{formattedDateOfBirth(dob)}</p>
        </li>
      ))}
    </div>
  );
};
