import "./footerStyle.css";


import { FaHome, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa" ;
import { FaPhone } from "react-icons/fa" ;
import { FaMailBulk } from "react-icons/fa" ;


import React from 'react'

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <FaHome size={20} style={{color:"#EC9568", marginRight: "2rem" }} />
                    <div>
                        <p>Rajapalayam</p>
                        <p>TamilNadu - 626 117
                        </p>
                    </div>
                </div>
                <div className="phone">
                    <h4>
                <FaPhone size={20} style={{color:"#EC9568", marginRight: "2rem" }} />
                6382960212
                </h4>
                </div>
                <div className="email">
                    <h4>
                <FaMailBulk size={20} style={{color:"#EC9568", marginRight: "2rem" }}/>
                srisridhar2002@gmail.com
                </h4>
                </div>

            </div>

            <div className="right">
                <h4>About Me</h4>
                <p>This is me. Sridhar S, an up-and-coming full-stack developer</p>
                <div className="social">
                    <a href="https://www.instagram.com/xolo_falcon/" target="_blank">
                <FaInstagram size={20} style={{color:"#EC9568", marginRight: "2rem" }}  />
                </a>
                <a href="https://twitter.com/Sridhar492" target="_blank">
                <FaTwitter size={20} style={{color:"#EC9568", marginRight: "2rem" }} />
                </a>
                <a href="https://www.linkedin.com/in/sridhar-s-880190247/" target="_blank">
                <FaLinkedin size={20} style={{color:"#EC9568", marginRight: "2rem" }} />
                </a>

                </div>

            </div>
         </div>
    </div>
  )
}

export default Footer