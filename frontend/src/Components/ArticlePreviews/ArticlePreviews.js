import React, { useState, useEffect } from "react";
// api
import EconTimes from "../../API/EconTimes";
// components
import { Preview } from './Preview.js';
// number converter
const converter = require('number-to-words');

export const ArticlePreviews = () => {

    // component state
    const [articles, setArticles] = useState([]);

    // get all articles 
    useEffect(() => {
        // fetch data
        const fetchData = async () => {
            try {
                const response = await EconTimes.get('/');
                setArticles(response.data.results);
            } catch (err) {
                console.log(err);
            }
        }
        fetchData();
    }, []);

    // render article previews
    return (
        <div className="previews">
            {
                articles.map((article, index) => {
                    return <Preview article={article} key={index} position={converter.toWords(index)} />
                })
            }
        </div>
    )
}