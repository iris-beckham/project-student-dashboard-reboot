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
      <input
        onChange={handleAuthor}
        type="text"
        placeholder="author"
        value={author}
        name="author"
        id="author"
      />
      <label htmlFor="author">Author</label>
      <input
        onChange={handleComment}
        type="text"
        placeholder="comment"
        value={comment}
        name="comment"
        id="comment"
      />
      <label htmlFor="comment">Comment</label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default CommentForm;
