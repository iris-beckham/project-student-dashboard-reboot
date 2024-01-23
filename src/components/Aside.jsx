import { Link } from "react-router-dom"
import { useState } from "react"
import "./Aside.css"


export const Aside = ({ setFilteredStudents, students, setCohort }) => {
  const handleChange = (e) => {
    const cohortName = e.target.textContent;
    setCohort(cohortName);
    if (cohortName === "All Students") {
      setFilteredStudents(students);
    } else {
      const newFilteredStudents = students.filter(
        (student) =>
          student.cohort.cohortCode === cohortName.split(" ").join("")
      );
      setFilteredStudents(applyFilters(newFilteredStudents))
    }
  };

  const applyFilters = (students) => {
    let filteredStudents = [...students]
    if (onTrack) {
      setResume(true);
      setLinkedin(true);
      setGithub(true);
      setInterview(true);
      setCodewars(true);
    }
    if (resume) {
      filteredStudents = filteredStudents.filter((student) => student.certifications.resume === true);
    }
    if (linkedin) {
      filteredStudents = filteredStudents.filter((student) => student.certifications.linkedin === true);
    }
    if (github) {
      filteredStudents = filteredStudents.filter((student) => student.certifications.github === true);
    }
    if (interview) {
      filteredStudents = filteredStudents.filter((student) => student.certifications.mockInterview === true);
    }
    if (codewars) {
      filteredStudents = filteredStudents.filter((student) => student.codewars.current.total >= 850);
    }
    return filteredStudents;
  }

  //ascending/descending state
  //true = ascending (2025->2026), false = descending (2026->2025)
  const [sortingDirection, setSortingDirection] = useState(true);
  let cohortArr = ['All Students', 'Winter 2025', 'Spring 2025', 'Summer 2025', `Fall 2025`, `Winter 2026`, `Spring 2026`, `Summer 2026`, `Fall 2026`]

  if (!sortingDirection) {
    cohortArr = [cohortArr[0], ...cohortArr.slice(1).reverse()]
  }

  const [resume, setResume] = useState(false);
  const [linkedin, setLinkedin] = useState(false);
  const [github, setGithub] = useState(false);
  const [interview, setInterview] = useState(false);
  const [codewars, setCodewars] = useState(false);
  const [onTrack, setOnTrack] = useState(false);

  const handleResumeCheckbox = (e) => {
    setResume(e.target.checked);
  }
  const handleLinkedinCheckbox = (e) => {
    setLinkedin(e.target.checked);
  }
  const handleGithubCheckbox = (e) => {
    setGithub(e.target.checked);
  }
  const handleInterviewCheckbox = (e) => {
    setInterview(e.target.checked);
  }
  const handleCodewarsCheckbox = (e) => {
    setCodewars(e.target.checked);
  }
  const handleOnTrackCheckbox = (e) => {
    setOnTrack(e.target.checked);
  }


  return (
    <aside>
      <form>
        <h2>Filters:</h2>
        <label htmlFor="">
          <input type="checkbox" name="resume" value={resume} onChange={handleResumeCheckbox} />
          Certified Resume
        </label>
        <label htmlFor="">
          <input type="checkbox" name="linkedin" value={linkedin} onChange={handleLinkedinCheckbox} />
          Certified LinkedIn
        </label>
        <label htmlFor="">
          <input type="checkbox" value={github} onChange={handleGithubCheckbox} />
          Certified GitHub
        </label>
        <label htmlFor="">
          <input type="checkbox" value={interview} onChange={handleInterviewCheckbox} />
          Certified Mock Interview
        </label>
        <label htmlFor="">
          <input type="checkbox" value={codewars} onChange={handleCodewarsCheckbox} />
          Codewars score 850 and over
        </label>
        <label htmlFor="">
          <input type="checkbox" value={onTrack} onChange={handleOnTrackCheckbox} />
          On track
        </label>
      </form>
      <h2>Choose A Class By Start Date</h2>
      <button onClick={() => setSortingDirection(!sortingDirection)}>
        Sort {sortingDirection ? 'Descending' : 'Ascending'} By Year
      </button>
      <ul className="aside-ul">
        {cohortArr.map(elem => {
          return (
            <Link className="cohorts" key={elem} to='/'>
              <li onClick={handleChange}>{elem}</li>
            </Link>)
        })}
      </ul>
    </aside>
  )
}
