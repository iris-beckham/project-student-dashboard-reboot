const Comments = ({ studentId, comments }) => {
  return (
    <div>
      <h3>Comments</h3>
      <ul className="container">
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
