import React from 'react'
import me from '../../index'; // gives image path

function Pic() {
    return (
        <div className="card" style={{ backgroundColor: "green", height: "300px", width: "95%", marginTop: "25px", }}>

            <img className="img" src={process.env.PUBLIC_URL + "/Img/me.jpg"} alt="Card image cap" style = {{height: "100%"}}/>

           
        </div>
    )
}

export default Pic