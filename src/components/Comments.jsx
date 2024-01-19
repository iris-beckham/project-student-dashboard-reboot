const Comments = ({ comments }) => {
    return (
        <div>
            <h3>Comments</h3>
            <ul>
                {comments.map((comment) => {
                    return (
                        <li key={comment.comment}>{comment.author}: {comment.comment}</li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Comments