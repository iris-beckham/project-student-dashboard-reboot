const Comments = ({ student, comments }) => {

  return (
    <div>
      <h3>Comments</h3>
      <ul className="container">
        <div>{student.notes.map((elem, index) => {
          return <li key={index}>{elem.commenter} says: {elem.comment}</li>
        })}
        </div>
        {comments.map((comment) => {
          return (
            <li key={comment.comment}>
              {comment.author} says: {comment.comment}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Comments;
