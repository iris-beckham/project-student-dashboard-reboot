import "./Table.css"

const Table = ({ student }) => {
  const { codewars, certifications, cohort } = student;

  const { current, goal } = codewars;
  const { resume, linkedin, github, mockInterview } = certifications;
  const { assignments, projects, assessments } = cohort.scores;

  const calculatePercent = (a, b) => {
    return Math.round((a / b) * 100);
  }

  function createPercentageSpan(percentage) {
    if (percentage >= 100) {
      return <span style={{ color: "green" }}>{percentage}%</span>;
    } else if (percentage >= 50) {
      return <span style={{ color: "orange" }}>{percentage}%</span>;
    } else {
      return <span style={{ color: "red" }}>{percentage}%</span>;
    }
  }

  return (
    <div>
      <table>
        <tbody>
          <tr>
            <th>Codewars</th>
            <th>Scores</th>
            <th>Certifications</th>
          </tr>
          <tr>
            <td>Current Total: {current.total}</td>
            <td>Assignments: {createPercentageSpan(assignments * 100)}
            </td>
            <td>Resume: {resume ? '👍🏾' : "👎🏾"} </td>
          </tr>
          <tr>
            <td>Last Week: {current.lastWeek}</td>
            <td>Projects: {createPercentageSpan(projects * 100)}</td>
            <td>LinkedIn: {linkedin ? "👍🏾" : "👎🏾"}</td>
          </tr>
          <tr>
            <td>Goal: {goal.total}</td>
            <td>Assesments: {createPercentageSpan(assessments * 100)}</td>
            <td>Mock Interview: {mockInterview ? "👍🏾" : "👎🏾"}</td>
          </tr>
          <tr>
            <td>
              Percent of Goal Achieved: {createPercentageSpan(calculatePercent(current.total, goal.total))}
            </td>
            <td></td>
            <td>Github: {github ? "👍🏾" : "👎🏾"}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
