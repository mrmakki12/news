import React from "react";
// time converter
const moment = require('moment');

export const Comment = ({comment}) => {

    return (
        <div className="comment-container">
            {/* Author information */}
            <div className="comment-author">
                {/* Name */}
                <div className="avatar-container">
                    <div className="avatar">
                        {comment.author[0]}
                    </div>
                    <p className="author-name">{comment.author}</p>
                </div>
                {/* Date */}
                <div>{moment(comment.date_published).format('MMMM Do YYYY, h:mm a')}</div>
            </div>
            {/* Text */}
            <div>
                {comment.text}
            </div>
        </div>
    )
};