import React from 'react'
// import { Link } from 'react-router-dom'
import './style.css'
function Works() {
    return (
        <div className="card work-card" >
                       
                        <img className="img" src={process.env.PUBLIC_URL + "/Img/drunks.png"} alt="Card image cap" style = {{height: "100%"}}/>

                <div className="card-body d-flex align-items-center justify-content-center">
                    <a href="/Portfolio" className="btn btn-primary">Projects</a>
                </div>
</div>

    );
};


export default Works