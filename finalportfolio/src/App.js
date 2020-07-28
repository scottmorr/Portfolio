import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Wrapper from './components/Wrapper'

import Home from './pages/Home'
import Projects from './pages/Projects'
import Contact from './pages/Contact.jsx'
import About from './pages/About.jsx'
function App() {
    return (
        <Router>
            <div>
                <NavBar />
                <Wrapper>
                <Route exact path="/About" component={About} />
                    <Route exact path="/Home" component={Home} />
                    <Route exact path="/Projects" component={Projects} />
                    <Route exact path="/Contact" component={Contact} />
                </Wrapper >
                <Footer />
            </div>
        </Router>
    );
}





export default App;
