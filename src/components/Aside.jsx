import { Link } from "react-router-dom"
import { useState } from "react"


export const Aside = ({ handleChange }) => {
  //ascending/descending state
  //true = ascending (2025->2026), false = descending (2026->2025)
  const [sortingDirection, setSortingDirection] = useState(true);
  const cohortArr = ['All Students', 'Winter 2025', 'Spring 2025', 'Summer 2025', `Fall 2025`, `Winter 2026`, `Spring 2026`, `Summer 2026`, `Fall 2026`]


  return (
    <>
      <h2>Choose A Class By Start Date</h2>
      <button onClick={() => setSortingDirection(!sortingDirection)}>Sort {sortingDirection ? 'Ascending' : 'Descending'} By Year</button>
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
