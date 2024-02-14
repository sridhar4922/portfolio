import "./workCardStyle.css"

import React from 'react';

const workCard = (props) => {
  return (
  <div className="Certificate-card">
    <img src={ props.imgsrc } alt="image"/>
    <h2 className="Certificate-title">{ props.title }</h2>
    <div className="pro-details">
      <p> { props.text }</p>
      </div>
      </div>
      );
    ;}
    
    export default workCard;