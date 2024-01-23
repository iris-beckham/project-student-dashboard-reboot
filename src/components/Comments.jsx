import "./Comments.css"
const Comments = ({ student, comments }) => {

  return (
      <div className="notes-container">
      <h3>Comments: {student.notes.length + comments.length}</h3>
      <ul className="all-notes">
        {student.notes.map((elem, index) => {
          return <li key={index}>{elem.commenter} says: {elem.comment}</li>
        })}
        

        {comments.map((comment, index) => {
          return (
            <li key={index}>
              {comment.author} says: {comment.comment}
            </li>
          );
        })}
      </ul>
      </div>
  );
};

export default Comments;
