import React from "react";
// import components
import { useNavigate } from "react-router-dom";

export const Preview = ({article, position}) => {

    const parser = new DOMParser();

    const docu = parser.parseFromString(article.text, 'text/html');

    const text = docu.getElementById('article-text');

    const navigator = useNavigate();

    const handleClick = (e) => {
        e.preventDefault();
        navigator(`/articles/${article.id}`);
    }

    console.log(article.img_src)

    return (
        <div className={`preview ` + position} onClick={(e) => handleClick(e)}>
            <div className="image">
                <img src={article.img_src} alt=''/>
            </div>
            <div class='preview-text'>
                <h1>{article.title}</h1>
                <h2>{article.hook}</h2>
                <p>{article.text.substring(0, 500)}...</p>
            </div>
        </div>
    )
}