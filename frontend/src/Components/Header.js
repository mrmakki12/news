import React from "react";

export const Header = () => {

    return (
        <header className="newspaper-header">
            {/* Newspaper title */}
            <div className="newspaper-name">
                <h1>The Economic Times</h1>
            </div>
            {/* inital publish date */}
            <div className="newspaper-date">
                <p>Sun. March 13th, 2022</p>
            </div>
        </header>
    )
}