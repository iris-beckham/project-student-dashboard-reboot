import { useEffect, useState } from "react";
import "./CommentForm.css"

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
    <form className="comment-form" onSubmit={handleSubmit}>
      {/* <label className="author-tag" htmlFor="author">Author </label> */}
      <input
        className="author"
        onChange={handleAuthor}
        type="text"
        placeholder="author"
        value={author}
        name="author"
        id="author"
        required
      />
      <br />
      {/* <label className="comment-tag"htmlFor="comment">Comment</label> */}
      <textarea
        className="comment"
        onChange={handleComment}
        type="text"
        placeholder="comment"
        value={comment}
        name="comment"
        id="comment"
        required
      />
      <br />
      <button type="submit"><span>Submit</span></button>
    </form>
  );
};

export default CommentForm;
