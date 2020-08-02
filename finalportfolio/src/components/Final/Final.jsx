import React from 'react'
import './style.css'

function Final() {
  return (

    <div className="container" id="finalcontainer">
      <div className="row">
        <div className="col-sm">
          {/* <div className="card" style={{ marginTop: "120px", width: "65%", marginLeft: "20%" }}> */}
          <div className="card-header">
            Quote
           </div>        

          </div>
        </div>
        <div className="row">
          <div className="col-sm">
            <div className="card-body" id="cardBody">
              <blockquote className="blockquote mb-0" id="famous">
                <p>In the end, remember, it's just <span>JavaScript!</span></p>
                <footer classNme="blockquote-footer">Someone Sorta famous in <cite title="Source Title">Coding Bootcamp</cite></footer>
              </blockquote>
            </div>
          </div>
        </div>
      </div>

  )
}
export default Final