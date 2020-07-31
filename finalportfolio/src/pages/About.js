import React, { Component } from "react";
import Bio from "../components/Bio"
import Links from "../components/Links"
import Works from "../components/Works"
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
                    <div className="col-sm">
                        < Pic
                        />
                    
                    </div>
                </div>
                    <div className="row">
                        <div className="col-sm">
                            < Links />
                        </div>
                        <div className="col-sm">
                            < Works />
                        </div>

                    </div>
                </div>
        )
    }
}
export default About;