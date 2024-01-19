import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import { getAllStudents } from "./api/fetch";

import Footer from "./components/Footer";
import Header from "./components/Header";
import About from "./components/About";
import { Home } from "./components/Home";
import { Aside } from "./components/Aside";
import Student from "./components/Student";

import CohortList from "./components/CohortList";



function App() {
  //students state 
  const [students, setStudents] = useState([]);

  // filtered students state
  const [filteredStudents, setFilteredStudents] = useState([])

  //state for cohort name
  const [cohort, setCohort] = useState('All Students');

  const handleChange = (e) => {
    const cohortName = e.target.textContent
    setCohort(cohortName);
    const newFilteredStudents = students.filter(student => student.cohort.cohortCode === cohortName.split(' ').join('')) 
    setFilteredStudents(newFilteredStudents)

  }


  useEffect(() => {
    getAllStudents().then((data) => {
      setStudents(data)
      setFilteredStudents(data)
    });
  }, []);


  // date function
  const formattedDateOfBirth = (dob) => {
    // Create a new Date object by parsing the input date of birth (dob)
    const newDob = new Date(dob);

    // Define options for formatting the date: full month name, numeric day, and numeric year
    const options = { month: "long", day: "numeric", year: "numeric" };

    // Use toLocaleDateString to format the newDob according to the specified options and 'en-US' locale
    const formattedDate = newDob.toLocaleDateString("en-US", options);

    // Return the formatted date as a string
    return formattedDate;
  };

  // on track to graduate fx
  const onTrackToGraduate = (student) => {
    const { resume, linkedin, mockInterview, github } = student.certifications;
    if (resume && linkedin && mockInterview && github) {
      return true;
    }
  };
  return (
    <div>
      <Header />
      <Aside handleChange={handleChange} />
      <Routes>
        <Route path="/">
          <Route
            index
            element={
              <Home
                onTrackToGraduate={onTrackToGraduate}
                formattedDateOfBirth={formattedDateOfBirth}
                filteredStudents={filteredStudents}
                cohort={cohort}
              />
            }
          />
          <Route
            path=":id"
            element={
              <Student
                onTrackToGraduate={onTrackToGraduate}
                formattedDateOfBirth={formattedDateOfBirth}
              />
            }
          />
        </Route>
        <Route path="/about" element={<About />}></Route>
      </Routes>

      
      <Footer />
    </div>
  );
}

export default App;
