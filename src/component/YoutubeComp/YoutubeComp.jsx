import React from 'react';
import './YoutubeComp.scss';

const YoutubeComp = (props) => {
    return(
        <div className="yt-wrapper">
            <div className="img-thumb">
                <img src="https://i.ytimg.com/vi/CZKcmzNs5Jw/hqdefault.jpg?sqp=-oaymwEYCKgBEF5IVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLAuQScvapeMf16Z5uwj-b356t7dZw" alt=""/>
                <p className="time">{props.time}</p>
            </div>
            <p className="title">{props.title}</p>
            <p className="desc">{props.desc}</p>
        </div>
    );
}

//Default Jika tidak menggunakan Props pada Home.jsx
YoutubeComp.defaultProps = {
    time : "00.00",
    title : "Input Title Here",
    desc : "0x ditonton. 0 hari yang lalu."
}

export default YoutubeComp;