import { getOneStudent } from "../api/fetch";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Table from "./Table";
import CommentForm from "./CommentForm";
import Comments from "./Comments";
import "./Student.css"

const Student = ({ formattedDateOfBirth, onTrackToGraduate }) => {
  const { id } = useParams();

  //to set the student to have falsy values
  const [student, setStudent] = useState({
    id: "",
    names: {
      preferredName: "",
      middleName: "",
      surname: "",
    },
    username: "",
    dob: "",
    profilePhoto: "",
    codewars: {
      current: { total: 0, lastWeek: 0 },
      goal: { total: 0, lastWeek: 0 },
    },
    certifications: {
      resume: false,
      linkedin: false,
      github: false,
      mockInterview: false,
    },
    notes: [
      {
        commenter: "",
        comment: "",
      },
    ],
    cohort: {
      cohortCode: "",
      cohortStartDate: "",
      scores: { assignments: 0, projects: 0, assessments: 0 },
    },
  });

  useEffect(() => {
    getOneStudent(id).then((data) => setStudent(data));
  }, []);

  //comments state
  const [comments, setComments] = useState(() => {
    const localValue = localStorage.getItem(`ITEMS_${id}`);
    if (localValue == null) return [];
    return JSON.parse(localValue);
  });

  const { names, username, dob, profilePhoto } = student;
  

  return (
    <div className="container">
      <div className="main-content">
      <img src={profilePhoto} alt={`${names.preferredName}`} />

        <p className="name">{`${names.preferredName} ${names.middleName} ${names.surname}`}</p>
        <p className="email">{`${username}`}</p>
        <p className="dob">Birthday: {formattedDateOfBirth(dob)}</p>
        <p className="on-track">{onTrackToGraduate(student) ? "On track to Graduate" : " "}</p>
      </div>

      <Table student={student} />
      <div className="notes">
        <h2>1 : 1 notes</h2>
        <CommentForm
          studentId={id}
          comments={comments}
          setComments={setComments}
        />
        <div className="comments">
        <Comments student={student} comments={comments} />
        </div>
      </div>
    </div>
  );
};

export default Student;
