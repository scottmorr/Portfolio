
import React, { Component } from "react";
import PortfolioProjects from "../components/PortfolioProjects"
import projectsJSON from "../Posts.json"




class Portfolio extends Component {
    constructor(props) {
        super(props)
        this.state = {
            projects: projectsJSON
        }
    }


    render() {
        return (

            <div className="container">
                <div className="row">

                    <div className="col-lg-5">

                    </div>

                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12">
                            <div id="h1_secondary">Portfolio</div>
                            <hr />
                        </div>
                    </div>
                    <div className="row">
                        {this.state.projects.map(project => (
                            <PortfolioProjects

                                title={project.title}
                                image={process.env.PUBLIC_URL + "/Img" + project.image}
                                link={project.link}
                                alt={project.alt}
                            />

                        ))
                        }

                    </div>
                </div>
            </div >

        )
    };
}

export default Portfolio
