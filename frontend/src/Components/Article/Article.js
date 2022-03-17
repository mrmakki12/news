import React, { useState, useEffect } from "react";
// import components 
import { useParams } from "react-router-dom";
import { Comments } from "../Comments/Comments";
// api 
import EconTimes from "../../API/EconTimes";
// time converter
const moment = require('moment');

export const Article = () => {

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
    }, []);

    return (
        <div className="article">
            <div className="comment-author" style={{'marginBottom': '25px'}}>
                <div className="avatar-container">
                    <div className="avatar">
                        A
                    </div>
                    <p className="author-name">Written by: {article.author}</p>
                </div>
                <div>{moment(article.date_published).format('MMMM Do YYYY, h:mm a')}</div>
            </div>
            <div dangerouslySetInnerHTML={createMarkup()}>
            </div>
            <div>
                <Comments comments={comments}/>
            </div>
        </div>
    )
}