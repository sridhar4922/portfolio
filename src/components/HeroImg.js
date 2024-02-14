import "./HeroimgStyles.css";

import React from 'react'
import { Link } from "react-router-dom";

const HeroImg = () => {
  return (
    <div className="hero">
        <div className="mask">
            <img className="intro"/>
        </div>
        <div className="content">
          <p>Hi I'm</p>
          <h1>Sridhar S</h1>
          <h4>Full Stack Developer</h4>
          <div>
            <Link to= "https://sridhar4922.github.io/Resume/" target="_blank" className="btn" >Resume</Link>
            <Link to="/contact" className="btn btn-light">Contact</Link>
          </div>
        </div>

    </div>
  )
}

export default HeroImg


