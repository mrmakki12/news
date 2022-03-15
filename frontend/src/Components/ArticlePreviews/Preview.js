import React from "react";
// import components
import { useNavigate } from "react-router-dom";

export const Preview = ({article, position}) => {

    const parser = new DOMParser();

    const docu = parser.parseFromString(article.text, 'text/html');

    const text = docu.getElementById('article-text');

    console.log(article, text);

    const navigator = useNavigate();

    const handleClick = (e) => {
        e.preventDefault();
        navigator(`/articles/${article.id}`);
    }

    return (
        <div className={`preview ` + position} onClick={(e) => handleClick(e)}>
            <p>{article.title}</p>
            <div>
                {

                }
            </div>
        </div>
    )
}