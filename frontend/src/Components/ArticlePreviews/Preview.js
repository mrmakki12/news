import React from "react";
// import components
import { useNavigate } from "react-router-dom";

export const Preview = ({article, position}) => {

    // navigate page to full article
    const navigator = useNavigate();

    // function to go to full article page
    const handleClick = (e) => {
        e.preventDefault();
        navigator(`/articles/${article.id}`);
    }

    // render html 
    const createMarkup = () => {
        return { __html: article.text.substring(0, 500) + '...'}
    }

    return (
        <div className={`preview ` + position} onClick={(e) => handleClick(e)}>
            {/* image */}
            <div className="image">
                <img src={article.img_src} alt=''/>
            </div>
            {/* preview text */}
            <div className='preview-text' dangerouslySetInnerHTML={createMarkup()}>
            </div>
        </div>
    )
}