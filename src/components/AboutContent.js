import "./AboutContentStyle.css";

import React from 'react'
import { Link } from "react-router-dom";
import prog from "../asset/prog.png";

const AboutContent = () => {
  return (
  <div className="about">

    <div className="left">
    <h1>Who Am I..?</h1>
    <p>Im a upcomming FullStack Developer.</p>
    <Link to="/contact"> 
    <button className="btn">Contact</button>
    </Link>
    </div>
    
    <div className="right">
    <div className="img-container">
        <div className="img-stack top">
            <img src={ prog } className="img" alt="image" />
        </div>
    </div>
    </div>
   </div>
  )
}

export default AboutContent