import "./workCardStyle.css"
import WorkCard from "./WorkCard";
import WorkCardData from "./WorkCardData";

import React from 'react';

const Work = () => {
  return (
    <div className="work-container">
      <h1 className="Certificate-heading">Certificates</h1> 
      <div className="Certificate-container">
        {WorkCardData.map((val, ind) => {
            return (
            <WorkCard
            key={ind}
            imgsrc={val.imgsrc}
            title={val.title}
            text={val.text}
            />
            )
        } )}
      </div>
    </div>
    )
  }
  export default Work;