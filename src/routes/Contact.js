import React from 'react'

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Heroimg2 from '../components/Heroimg2';
import Form from "../components/Form";

const Contact = () => {
  return (
    <div>
      <Navbar/>
      <Heroimg2 heading="CONTACT" text="Have a chat with me..!"/>
      <Form/>
      <Footer/>
    </div>
  )
}

export default Contact