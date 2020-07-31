import React from 'react'
import './style.css'

function Links () {
 return (
    <div className="card" style={{ backgroundColor: "lavender", height: "300px", width: "95%", marginTop: "25px", marginLeft: "5%"}}>
<h2>Links</h2>


<ul className="nav flex-column" style = {{marginTop: "20px"}}>
  <li className="nav-item">
    <a className="nav-link active" href="https://github.com/scottmorr">Git Hub</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="https://www.linkedin.com/mynetwork/">LinkedIn</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="mailto: scottmorr75@gmail.com"> scottmorr75@gmail.com</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href=" file:///C:/Users/scott/Downloads/Resume%20(2).pdf"> Resume    F</a>
  </li>
</ul>

</div>
 )
}

export default Links