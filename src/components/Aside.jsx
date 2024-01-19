
export const Aside = ({ students }) => {
  const handleChange = (e) => {
    console.log(e.target.value)
    console.log(students)
  }
  return (
    <>
      <h2>Choose A Class By Start Date</h2>
      <button>Sort Descending By Year</button>
      <ul>
        <li>All Students</li>
        <li value='Winter2025' onClick={handleChange}>Winter 2025</li>
        <li>Spring 2025</li>
        <li>Summer 2025</li>
        <li>Fall 2025</li>
        <li>Winter 2026</li>
        <li>Spring 2026</li>
        <li>Summer 2026</li>
        <li>Fall 2026</li>
      </ul>
    </>
  )
}
