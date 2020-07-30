import React, { Component } from "react";
import Bio from "../components/Bio"
import Links from "../components/Links"
import Projects from "../components/Projects"
import Pic from "../components/Pic"

class About extends Component {

    render() {
        return (
            <div class="container">
                <div class="row">
                    <div class="col-sm">
                        < Bio />
                    </div>
                    <div class="col-sm">
                        < Pic />
                    </div>
                </div>
                    <div class="row">
                        <div class="col-sm">
                            < Links />
                        </div>
                        <div class="col-sm">
                            < Projects />
                        </div>

                    </div>
                </div>
        )
    }
}
export default About;