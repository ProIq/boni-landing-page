import React from 'react'
import "./app.css";
import Body from './Body.jsx';
import Contact from './Contact';
import Header from "./Header.jsx"
import Nav from "./Nav.jsx";
import Offer from './Offer';
import Play from './Play';
import Whatboni from './Whatboni.jsx';
const App = () => {
  return (
    <div className="App">
      <Header/>
      <Nav/>
      <Body/>
      <Whatboni/>
      <Offer/>
      <Play/>
      <Contact/>
    </div>
  )
}

export default App;