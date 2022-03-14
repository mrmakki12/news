import React from "react";

export const Preview = ({article, position}) => {

    const parser = new DOMParser();

    const text = parser.parseFromString(article.text, "text/html").getElementById('article-text');

    console.log(text);

    console.log(text);
    return (
        <div className={`preview ` + position}>
            <p>{article.title}</p>
            <div>
                {
                    // document.appendChild(text)
                }
            </div>
        </div>
    )
}