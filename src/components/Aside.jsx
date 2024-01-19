import { Link } from "react-router-dom"


export const Aside = ({ handleChange }) => {
  const cohortArr = ['All Students', 'Winter 2025', 'Spring 2025', 'Summer 2025', `Fall 2025`, `Winter 2026`, `Spring 2026`, `Summer 2026`, `Fall 2026`]


  return (
    <>
      <h2>Choose A Class By Start Date</h2>
      <button>Sort Descending By Year</button>
      <ul>
        {cohortArr.map(elem => {
          return (
            <Link key={elem} to='/'>
              <li onClick={handleChange}>{elem}</li>
            </Link>)
        })}
      </ul>
    </>
  )
}
