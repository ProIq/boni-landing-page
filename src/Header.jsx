import React from 'react'
import "./header.css";
import vector from "./images/Vector.png";
import down from "./images/down.png";
import message from "./images/message.png";
import chat from "./images/chat.png";
const Header = () => {
  return (
    <div className="header">
      <img className="vector" src={vector}/>
      <div className="english">English</div>
      <img className="down" src={down}/>
      <img src={message} alt="" className="message" />
      <div className="contact">contact@boni.com</div>
      <img src={chat} alt="" className="chat" />
      <div className="whatsapp">WhatsApp</div>
    </div>
  )
}

export default Header