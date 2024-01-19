import { useState, useEffect } from "react";
import { getAllStudents } from "../api/fetch";
// this link will be used to take us to the indivual students information
import { Link } from "react-router-dom";

export const Home = ({ formattedDateOfBirth, students, setStudents }) => {
  const [onTrack, setOnTrack] = useState(false);
  useEffect(() => {
    getAllStudents().then((data) => setStudents(data));
  }, []);

  return (
    <div>
      <h1>All Students</h1>
      <h2>Total Students: {students.length}</h2>
      {students.map(
        ({ id, names, username, dob, profilePhoto, certifications }) => (
          // this makes it where whenever we click the student it takes us to their page based on their id
          <Link key={id} to={`/${id}`}>
            <li>
              <h3>
                {certifications.resume &&
                  certifications.linkedin &&
                  certifications.github &&
                  certifications.mockInterview
                  ? "On track to Graduate"
                  : " "}
              </h3>
              <img src={profilePhoto} alt={names.preferredName} />
              <h2>
                {`${names.preferredName} ${names.middleName} ${names.surname} `}
              </h2>
              <p>{username}</p>
              <p>{formattedDateOfBirth(dob)}</p>
            </li>
          </Link>
        )
      )}
    </div>
  );
};
