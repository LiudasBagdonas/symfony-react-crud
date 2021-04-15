import React, { useCallback, useEffect, useState } from 'react';


function Comment() {

    const [comments, setComments] = useState([])
    const [isLoading, setIsLoading] = useState(null)

    const getComments = useCallback(async () => {
        setIsLoading(true)
        const response = await fetch('https://localhost:8000/api/comments');
        const json = await response.json();
        setComments(json)
        setIsLoading(false)
    }, [])

    useEffect(() => {
        getComments()
    }, [])

    console.log(comments)

    return (
        <section id="comments-section" className="comments-box">
            {isLoading && <p>Loading...</p>}
            {comments ?
                comments.map((comment, index) =>
                    <div key={index} className="comment-box">
                        <img className="user-img" src="pics/anonymous.jpg"></img>
                        <div className="comment-content">

                            <div className="name-index-box">
                                <p className="comment-name">{comment.name}</p>
                                <p className="comment-index-id">Comment #{comment.id}</p>
                            </div>

                            <p className="comment-text">{comment.comment}</p>
                            <div className="time-edit-delete-box">
                                <p className="comment-timestamp">{comment.timestamp}</p>
                                <div className="edit-delete-box">
                                    <a href="#" className="delete-comment-button" data-id={comment.id}>Delete</a>
                                    <a href="/comments/edit/{comment.id}" className="edit-comment-button">Edit</a>
                                </div>
                            </div>
                        </div>
                    </div>

                )
:
                <p className="no-comments-text">No comments to show.</p>
            }
        </section>
    );
}

export default Comment;