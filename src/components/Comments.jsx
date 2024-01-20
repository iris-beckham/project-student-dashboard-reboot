const Comments = ({ studentId, comments }) => {
  return (
    <div>
      <h3>Comments</h3>
      <ul className="container">
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
