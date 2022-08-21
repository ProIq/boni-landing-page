import React from 'react'
import "./nav.css";
import boni from "./images/boni.png";
function Nav() {
  return (
    <div className="nav">
        <img src={boni} alt="here" className="boni1" />
        <div className="about-us">About us</div>
        <div className="contact-us">Contact us</div>
        <button className="download">
            Download
        </button>
    </div>
  )
}

export default Nav