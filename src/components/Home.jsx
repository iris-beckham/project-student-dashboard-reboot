// this link will be used to take us to the indivual students information
import { Link } from "react-router-dom";
import "./Home.css";

export const Home = ({ formattedDateOfBirth, filteredStudents, cohort }) => {
  const cohorts = `${cohort.split(" ").join("")}`;
  console.log(cohorts);

  // Get the button:
  let mybutton = document.getElementById("myBtn");

  // When the user scrolls down 20px from the top of the document, show the button
  window.onscroll = function () { scrollFunction() };

  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20 && mybutton) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  }

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <div>
      <h1 className={`cohort ${cohort.split(" ").join("")}`}>
        {cohort.split(" ").join(" ")}
      </h1>

      <h2 className="student-num">Total Students: {filteredStudents.length}</h2>
      <div className="main">
        {filteredStudents.map(
          ({
            id,
            names,
            username,
            dob,
            profilePhoto,
            certifications,
            codewars,
          }) => (
            // this makes it where whenever we click the student it takes us to their page based on their id
            <Link key={id} to={`/${id}`}>
              <li>
                <h3>
                  {certifications.resume &&
                    certifications.linkedin &&
                    certifications.github &&
                    certifications.mockInterview &&
                    codewars.current.total >= 850
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
      <button onClick={handleScrollToTop} id="myBtn" title="Go to top">🔝</button>
    </div>
  );
};
