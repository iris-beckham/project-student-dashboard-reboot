import React from "react";

const Table = ({ student }) => {
  const { codewars, certifications, cohort } = student;

  const { current, goal } = codewars;
  const { resume, linkedin, github, mockInterview } = certifications;
  const { assignments, projects, assessments } = cohort.scores;
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
            <td>Assignments: {assignments * 100}% </td>
            <td>Resume: {resume ? "🟢" : "🔴"} </td>
          </tr>
          <tr>
            <td>Last Week: {current.lastWeek}</td>
            <td>Projects: {projects * 100}% </td>
            <td>LinkedIn: {linkedin ? "🟢" : "🔴"}</td>
          </tr>
          <tr>
            <td>Goal: {goal.total}</td>
            <td>Assessments: {assessments * 100}% </td>
            <td>Mock Interview: {mockInterview ? "🟢" : "🔴"}</td>
          </tr>
          <tr>
            <td>
              Percent of Goal Achieved:
              {Math.floor((current.total / goal.total) * 100)}%
            </td>
            <td></td>
            <td>Github: {github ? "🟢" : "🔴"}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
