import React, { Component } from 'react';
import homepage_logo from '../Img/homepage_logo.png'
// import profile from "../Img/brooksfam.png"


class Home extends Component {
    render() {
        return (
            <div>
                <img src={process.env.PUBLIC_URL + "..Img/homepage_logo.png"} alt="clouds_logo" />
                <br />
                <h1>This is a test landing page</h1>
            </div>
        );
    };


}

export default Home;