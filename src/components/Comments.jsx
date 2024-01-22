const Comments = ({ studentId, comments }) => {
  console.log(comments.length);
  return (
    <div>
      <h3>{comments.length} Comments</h3>
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
