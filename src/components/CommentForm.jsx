import { useState } from "react";

const CommentForm = ({ comments, setComments }) => {
  const [comment, setComment] = useState("");
  const [author, setAuthor] = useState("");

  // handleAuthor
  const handleAuthor = (e) => {
    setAuthor(e.target.value);
  };

  // handleComment
  const handleComment = (e) => {
    setComment(e.target.value);
  };

  // handleSubmit
  const handleSubmit = (e) => {
    e.preventDefault();
    const newCommentArray = [...comments];
    newCommentArray.push({ author: author, comment: comment });
    setComments([...newCommentArray]);
    setComment("");
    setAuthor("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="author">
        <input
          onChange={handleAuthor}
          type="text"
          placeholder="author"
          value={author}
        />
      </label>
      <label htmlFor="comment">
        <textarea
          onChange={handleComment}
          type="text"
          placeholder="comment"
          value={comment}
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default CommentForm;
