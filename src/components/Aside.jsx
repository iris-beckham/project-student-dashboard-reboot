import { Link } from "react-router-dom"

export const Aside = ({ students, cohort, setCohort }) => {
  const handleChange = (e) => {
    //clear the page??
    setCohort(e.target.textContent);
  }
  return (
    <>
      <h2>Choose A Class By Start Date</h2>
      <button>Sort Descending By Year</button>
      <ul>
        <Link to='/'><li>All Students</li></Link>
        <Link to='/cohort'>
          <li onClick={handleChange}>Winter 2025</li>
        </Link>
        <Link to='/cohort'>
          <li>Spring 2025</li>
        </Link>
        <Link to='/cohort'>
          <li onClick={handleChange}>Summer 2025</li>
        </Link>
        <Link to='/cohort'>
          <li onClick={handleChange}>Fall 2025</li>
        </Link>
        <Link to='/cohort'>
          <li onClick={handleChange}>Winter 2026</li>
        </Link>
        <Link to='/cohort'>
          <li onClick={handleChange}>Spring 2026</li>
        </Link>
        <Link to='/cohort'>
          <li onClick={handleChange}>Summer 2026</li>
        </Link>
        <Link to='/cohort'>
          <li onClick={handleChange}>Fall 2026</li>
        </Link>

      </ul>
    </>
  )
}
