import React from 'react'
import { NavLink } from 'react-router-dom'

// import { Link } from 'react-router-dom'
import './style.css'
function NavBar() {
  return (

      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <NavLink className="navbar-brand"  to="/">
          Scott Morrison
        </NavLink>
        <div>
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink
                to="/About"
                className="nav-link"
                style={{ color: "darkGray" }}
                activeStyle={{ color: "red" }}
                exact
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/Projects"
                className="nav-link"
                style={{ color: "darkGray" }}
                activeStyle={{ color: "red" }}
                exact
              >
                Projects
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/Contact"
                className="nav-link"
                style={{ color: "darkGray" }}
                activeStyle={{ color: "red" }}
                exact
              >
                Contact
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/Contact"
                className="nav-link"
                style={{ color: "darkGray" }}
                activeStyle={{ color: "red" }}
                exact
              >
                {/* Solo Challenge */}
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    );






















    
  //   <nav className="navbar navbar-expand-lg navbar-light bg-light">
  //     <NavLink className="navbar-brand" to="/Home">
  //       Scott Morrison
  //       </NavLink>
  //     <div>
  //       <ul className="navbar-nav">
  //         <li className="nav-item">
  //           <NavLink
  //             to="/About"
  //             className="nav-link"
  //             style={{ color: "darkGray" }}
  //             activeStyle={{ color: "red" }}
  //             exact
  //           >
  //             About
  //             </NavLink>
  //         </li>
  //       </ul>
  //       <ul className="navbar-nav">
  //         <li className="nav-item">
  //           <NavLink
  //             to="/Projects"
  //             className="nav-link"
  //             style={{ color: "darkGray" }}
  //             activeStyle={{ color: "red" }}
  //             exact
  //           >
  //             Projects
  //             </NavLink>
  //         </li>
  //       </ul>

  //       <ul className="navbar-nav">
  //         <li className="nav-item">
  //           <NavLink
  //             to="/Contact"
  //             className="nav-link"
  //             style={{ color: "darkGray" }}
  //             activeStyle={{ color: "red" }}
  //             exact
  //           >
  //             Contact
  //             </NavLink>
  //         </li>
  //       </ul>
  //     </div>
  //   </nav>


  // );
}


export default NavBar