//export { default } from './Projects'
import React from "react";


function PortfolioProjects(props) {
    return (

        <div className="imgcontainer">
            <div className="row">
                <div className="col-lg-4 col-md-4 col-sm-4 img-responsive">
                    <img id="password" className="img" 
                    src={require("../../Img"+ props.image)}
                        alt={props.alt} />
                    <div>
                        <p id="linkfont">
                            <a href={props.link}>{props.id}{props.title}</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default PortfolioProjects;