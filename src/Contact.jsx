import React from 'react'
import "./contact.css";
const Contact = () => {
  return (
    <div className="contact-page">
        <div className="contact-head">
            Contact us
        </div>
        <div className="contact-details">
            <div className="say-hi">Send us a ‘Hi’ to get registered or for help</div>
            <div className="mess"><span className="busy">Hi Boni Business</span><span className="time">12:00pm</span></div>
            <button className="what-app">
                <div className="kit"></div>
                <div className="phone"></div>
                Say Hi Boni Business
            </button>
            <div className="or">Or</div>
            <div className="phone-number">
              <div className="tell-number">
              Contact us at
              </div>
              <button className="tell-no">
                <div className="callcentre">
                  
                </div>
                9019516735
              </button>
            </div>
        </div>
        <div className="oongli-1"></div>
        <div className="oongli-2"></div>
    </div>
  )
}

export default Contact