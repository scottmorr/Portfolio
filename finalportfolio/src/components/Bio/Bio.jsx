import React from 'react'
// import { Link } from 'react-router-dom'
import './style.css'
function Bio() {
    return (
        <div className="card" style={{ backgroundColor: "red", height: "300px", width: "38%", marginTop: "25px", marginLeft: "5%"}}>
            <div className="bio" style = {{ marginLeft: "5%", marginTop: "25px"}}>
            <h1>Scott's Biography</h1>
            <p>I spent 20 years in public education before deciding it was time for a change </p>
            <p>The world of technology excited me. it was time to give programming a shot!</p>
            <p>I've been around the world a few times. I've been on lots of adventures</p>
            <p>Web design is my newest venture. I'm off to an exciting start.</p>
</div>
        </div>
    );
};


export default Bio