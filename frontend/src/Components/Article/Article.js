import React, { useState, useEffect } from "react";
// import components 
import { useParams } from "react-router-dom";
// api 
import EconTimes from "../../API/EconTimes";

export const Article = () => {

    const { id } = useParams();

    // article state 
    const [article, setArticle] = useState({});

    // get article and its comments
    useEffect(() => {
        // fetch data
        const fetchData = async () => {
            try {
                const response = await EconTimes.get(`/${id}`);
                setArticle(response.data.article.rows[0]);
            } catch (err) {
                console.log(err);
            }
        }
        fetchData();
    }, []);

    return (
        <div>
            <div>
                <p>{article.title} boi</p>
            </div>
            <div>
                {/* <Comments /> */}
            </div>
        </div>
    )
}