// this link will be used to take us to the indivual students information
import { Link } from "react-router-dom";

export const Home = ({ formattedDateOfBirth, filteredStudents, cohort }) => {
  return (
    <div>
      <h1>{cohort.split(' ').join(" ")}</h1>
      <h2>Total Students: {filteredStudents.length}</h2>
      {filteredStudents.map(
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
