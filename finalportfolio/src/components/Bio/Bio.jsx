import React from 'react'
// import { Link } from 'react-router-dom'
import './style.css'
function Bio() {
    return (
        <div className="card" style={{ backgroundColor: "lavender", height: "300px", width: "95%", marginTop: "25px", marginLeft: "5%"}}>
            <div className="bio" style = {{ marginLeft: "5%", marginTop: "15px"}}>
            <h2> About Me</h2>
            <p>I've spent 20 years in public education and have decided to make a change. </p>
            <p>The world of technology has excited me. It's time to give programming a shot!</p>
            <p>I've traveled the world. I've been on lots of adventures</p>
            <p>Web design is my next venture. I'm off to an exciting start.</p>
</div>
        </div>
    );
};


export default Bio