

const CommentForm = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <form onSubmit={handleSubmit}>
            <h2>1 on 1 notes</h2>
            <label htmlFor="author">
                <input type="text" placeholder="author" />
            </label>
            <label htmlFor="comment">
                <textarea type="text" placeholder="comment" />
            </label>
            <button type="submit">Submit</button>
        </form>
    )
}

export default CommentForm