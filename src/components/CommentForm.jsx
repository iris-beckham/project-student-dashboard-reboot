import { useEffect, useState } from "react";

const CommentForm = ({ studentId, comments, setComments }) => {
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
  useEffect(() => {
    localStorage.setItem(`ITEMS_${studentId}`, JSON.stringify(comments));
  }, [comments, studentId]);

  return (
    <form style={{ border: "2px solid black" }} onSubmit={handleSubmit}>
      <label htmlFor="author">Author</label>
      <input
        onChange={handleAuthor}
        type="text"
        placeholder="author"
        value={author}
        name="author"
        id="author"
      />
      <br />
      <br />
      <label htmlFor="comment">Comment</label>
      <input
        onChange={handleComment}
        type="text"
        placeholder="comment"
        value={comment}
        name="comment"
        id="comment"
      />
      <br />
      <br />

      <button type="submit">Submit</button>
    </form>
  );
};

export default CommentForm;
