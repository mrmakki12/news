import React, { useState, useEffect } from "react";
// import components 
import { useParams } from "react-router-dom";
import { Comments } from "../Comments/Comments";
// api 
import EconTimes from "../../API/EconTimes";
// time converter
const moment = require('moment');

export const Article = () => {

    // get id from url
    const { id } = useParams();

    // article state 
    const [article, setArticle] = useState({});

    // comments 
    const [comments, setComments] = useState([]);

    // render html
    const createMarkup = () => {
        return { __html: article.text }
    };

    // get article and its comments
    useEffect(() => {
        // fetch data
        const fetchData = async () => {
            try {

                const response = await EconTimes.get(`/${id}`);
                setArticle(response.data.article.rows[0]);

                const response1 = await EconTimes.get(`/${id}/comments`);
                setComments(response1.data.comments.rows);

            } catch (err) {
                console.log(err);
            }
        }
        fetchData();
    }, [comments]);

    return (
        <div className="article">
            {/* Author information */}
            <div className="comment-author" style={{'marginBottom': '25px'}}>
                {/* name */}
                <div className="avatar-container">
                    <div className="avatar">
                        {
                             article.author ? article.author[0] : 'A'
                        }
                    </div>
                    <p className="author-name">Written by: {article.author}</p>
                </div>
                {/* date */}
                <div>{moment(article.date_published).format('MMMM Do YYYY, h:mm a')}</div>
            </div>
            {/* Article itself */}
            <div dangerouslySetInnerHTML={createMarkup()}>
            </div>
            <div>
                <Comments comments={comments}/>
            </div>
        </div>
    )
}