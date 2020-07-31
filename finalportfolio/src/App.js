import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Footer from './components/Footer'
import NavBar from './components/NavBar'
import Wrapper from './components/Wrapper'

// import Projects from './pages/Portfolio'
import Contact from './pages/Contact'
import About from './pages/About'
import Portfolio from "./pages/Portfolio";
function App() {
    return (
        <Router>
            <div>
                <NavBar />
                <Wrapper>
                    <Route exact path="/About" component={About} />
                    <Route exact path="/Portfolio" component={Portfolio} />
                    <Route exact path="/Contact" component={Contact} />
                </Wrapper >
                <Footer />
            </div>
        </Router>
    );
}

export default App;
