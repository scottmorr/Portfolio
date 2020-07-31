import React from 'react'
import flowers from "../../Img/homepage_logo.png"

function Pic() {
    return (
        <div className="card" style={{ backgroundColor: "green", height: "300px", width: "95%", marginTop: "25px",  }}>

         
                <img src={flowers} alt="webtitle_logo" style = {{height: "300px", width: "auto"}}/>
            
          
    

        </div>
    )
}

export default Pic