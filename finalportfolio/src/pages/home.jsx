import React, { Component } from 'react';
// import PortfolioCard from "../components/PortfolioCard"
import Bio from "../components/Bio"




class Home extends Component {
    render() {
        return (
            <div>
                <img src={process.env.PUBLIC_URL + "/assets/images/logo/exercise_wars_webtitle.png"} alt="webtitle_logo" />
                <br />
                <h1>This is a test landing page</h1>
            </div>
        );
    };


}

export default Home;