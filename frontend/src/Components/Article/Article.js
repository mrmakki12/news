import React, { useState, useEffect } from "react";
// import components 
import { useParams } from "react-router-dom";
import { Comments } from "../Comments/Comments";
// api 
import EconTimes from "../../API/EconTimes";

export const Article = () => {

    const { id } = useParams();

    // article state 
    const [article, setArticle] = useState({});

    // comments 
    const [comments, setComments] = useState([]);

    // parse html from text
    const parser = new DOMParser();
    const document = parser.parseFromString(article.text, 'text/html');
    console.log(document)
    const text = document.getElementById('article-text');
    console.log(text);

    const appendText = () => {
        const div = document.createElement('div')
        div.appendChild(text);
        div.classList.add('article-text');
        console.log(div.childElementCount);
        return div;
    }

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
            <div>
                <h1>{article.title}</h1>
                <h2>{article.hook}</h2>
                <div>
                    {
                        article.text
                    }
                </div>
            </div>
            <div>
                <Comments comments={comments}/>
            </div>
        </div>
    )
}