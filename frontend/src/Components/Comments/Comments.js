import React, { useState } from "react";
// api 
import EconTimes from "../../API/EconTimes";
// components
import { useParams } from "react-router-dom";
import { Comment } from './Comment.js';


export const Comments = ({comments}) => {

    // url param
    const { id } = useParams();

    // state for input
    const [author, setAuthor] = useState('');
    const [comment, setComment] = useState('');

    // submit comment
    const handleSubmit = () => {
        EconTimes.post(`/${id}/comments`, { article_id: id, author: author, text: comment});
        setAuthor('');
        setComment('');
    }

    return (
        <div className="comments-container">
            <div>
                <h1>Leave A Comment</h1>
                <div>
                    {/* form to leave comment */}
                    <form className="comment-form">
                        <input 
                            type='text' 
                            placeholder="Your Name"
                            maxLength={50} 
                            value={author} 
                            onChange={(e) => setAuthor(e.target.value)}
                        />
                        <textarea 
                            type='text' 
                            placeholder="Your Comment"
                            value={comment} 
                            onChange={(e) => setComment(e.target.value)}
                        />
                        <button 
                            type='submit'
                            disabled={comment.length === 0 || author.length === 0}
                            onClick={() => handleSubmit()}
                            >Submit
                        </button>
                    </form>
                </div>
                <h2>Comments</h2>
            </div>
            {/* Render comments here */}
            <div>
                {
                    comments && comments.map((comment, index) => {
                        return <Comment comment={comment} key={index}/>
                    })
                }
            </div>

        </div>
    )
}