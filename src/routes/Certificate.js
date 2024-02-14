import React from 'react'

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Heroimg2 from '../components/Heroimg2';
import Work from '../components/Work';


const Certificate = () => {
  return (
    <div>
      <Navbar/>
      <Heroimg2 heading="Certificates" text="Here are some of my certificates..!"/>
      <Work/>
      <Footer/>
    </div>
  )
}

export default Certificate