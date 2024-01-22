import "./Comments.css"
const Comments = ({ student, comments }) => {

  return (
    <>
      <h3>Comments: {student.notes.length + comments.length}</h3>
        <div className="current-notes">
      <ul>
        <div>{student.notes.map((elem, index) => {
          return <li key={index}>{elem.commenter} says: {elem.comment}</li>
        })}
        </div>

        {comments.map((comment, index) => {
          return (
            <li key={index}>
              {comment.author} says: {comment.comment}
            </li>
          );
        })}
      </ul>
        </div>
    </>
  );
};

export default Comments;
