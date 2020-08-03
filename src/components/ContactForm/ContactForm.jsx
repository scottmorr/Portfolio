import React from 'react'
import './style.css'

function ContactForm() {
    return (
        <div className="card  border-light mb-3">
            <div id="h1_primary">Contact</div>
            <div className="card-body" style={{ width: "85%", marginLeft: "10%", marginTop: "25px" }}>
                <form>
                    <div className="form-group" style={{ backgroundColor: "white", padding: "25px" }}>
                        <label>Name</label>
                        <input type="name" className="form-control" id="exampleFormControlInput1" placeholder="John Smith" />
                        <div className="form-group" style={{ marginTop: "20px" }}>
                            <label>Email Address</label>
                            <input type="name" className="form-control" placeholder="name@example.com" />
                        </div>
                        <div className="form-group">
                            <label>Message</label>
                            <textarea className="form-control" id="exampleFormControlTextarea1" placeholder="Leave a message!" rows="4"></textarea>
                        </div>
                        {/* 
                        <input type="button" className="w3-button w3-black" value="Input Button">
                            <button className="w3-button w3-black">Button Button</button>
                            <a href="#" className="w3-button w3-black">Link Button</a> */}

                        <a class="w3-btn w3-black" href="/Congrats">Submit</a>

                        {/* <input id="btnbtnbtn" type="submit" value="Submit" /> */}

                    </div>
                </form>

            </div>
        </div>


    )
};

export default ContactForm