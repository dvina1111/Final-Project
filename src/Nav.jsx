import React, {useState, useEffect ,} from "react";
import "./Nav.css";
import logo from "../src/images/logo.png"
import avataar from "../src/images/avataar.png";

function Nav() {
const [show, handleShow] = useState(false);

const transitionNavbar = () => {
    if (window.scrollY > 100) {
        handleShow(true);
    } else{
        handleShow(false)
    }
}

useEffect(() => {
window.addEventListener("scroll" , transitionNavbar)
return () => window.removeEventListener('scroll',transitionNavbar)
},  [])
  return (
    <div className={`nav ${show && "nav__black"}`}>
        <div className="nav__contents">
        <img 
        className='nav_logo' src={logo}alt="" />

        <img 
        className='nav__avataar' src={avataar} alt="" />
        </div>
       
        <h1>This is the navigation</h1>
        </div>
  )
}

export default Nav