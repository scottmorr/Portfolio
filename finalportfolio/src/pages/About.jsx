import React, { Component } from "react";
import Bio from "../components/Bio"
import Links from "../components/Links"
import Projects from "../components/Projects"
import Pic from "../components/Pic"
// import flowers from "../Img/homepage_logo.png"
class About extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm">
                        < Bio />
                    </div>
                    <div class="col-sm">
                        < Pic
                        />
                        {/* <img className= "img" src =  {flowers} alt="clouds" />  */}
                        
               
                    </div>
                </div>
                    <div className="row">
                        <div className="col-sm">
                            < Links />
                        </div>
                        <div className="col-sm">
                            < Projects />
                        </div>

                    </div>
                </div>
        )
    }
}
export default About;