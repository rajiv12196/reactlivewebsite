import React  from 'react';
import web from "../src/Images/logo.jpg"
import { NavLink } from 'react-router-dom';
import Common from "./Common";
const About = () =>{
    
    return( 
    <>
     <Common name="welcome to the about page" imgsrc={web} visit="/contact" btname="contact now"/>
     

    </>);
};
export default About;
