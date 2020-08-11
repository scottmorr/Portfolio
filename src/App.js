import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import Footer from './components/Footer'
import NavBar from './components/NavBar'
import Wrapper from './components/Wrapper'

// import Projects from './pages/Portfolio'
import Contact from './pages/Contact'
import About from './pages/About'
import Portfolio from "./pages/Portfolio";
import Congrats from "./pages/Congrats";
function App() {
    return (
        <Router basename="/">
            <div>
                <NavBar />
                <Wrapper>
                    <Route exact path="/" component={About} />
                    <Route exact path="/About" component={About} />
                    <Route exact path="/Portfolio" component={Portfolio} />
                    <Route exact path="/Contact" component={Contact} />
                    <Route exact path="/Congrats" component={Congrats} />

                </Wrapper >
                <Footer />
            </div>
        </Router>
    );
}

export default App;
