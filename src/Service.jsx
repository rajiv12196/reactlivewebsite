import React  from 'react';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import Navbar from "./Navbar";
import Call from "./Call";
import Contact from "./Contact";
import { NavLink } from 'react-router-dom';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import {Paper } from '@material-ui/core';
import tdz from "../src/Images/Tdz.png";
const Service = () =>{
    const theme = createMuiTheme({
      palette:{
         type:"dark",
      },
    });
        return( 
    <>
<ThemeProvider theme={theme}>
    <Paper >
    <Navbar/>
    

   
     <div className="my-4">
    
        <div className="row">
        <div className="col-10 mx-auto">
        <div className="container-fluid mb-4 ">
         
         <p className=" mx-4">
        Get quality services within limited time frame.
      </p>
      <NavLink to="" className="btn btn-primary mx-4">Our services</NavLink>
     </div>
     </div>
     </div>
     </div>
     
    
        <div className="row">
        <div className="col-10 mx-auto">
         <div className="row gy-4">
         <div className="container-fluid mb-4 " >
         <div class="flex-container bg-dark" >
  <div className="child ">
  <NavLink to="" className="btn btn-light mx-4 "className="btn"> <img src={tdz} className="img-fluid rounded mx-auto d-block h-15 w-25 " alt="img"/>Designing <ArrowForwardIcon/></NavLink>
  </div>
  <div className="child">
  <NavLink to="" className="btn btn-light mx-4 "className="btn" > 
    
  <img src={tdz} className="img-fluid rounded mx-auto d-block h-15 w-25 " alt="img"/>
  Development <ArrowForwardIcon/></NavLink>
  </div>
  <div className="child">
  <NavLink to="" className="btn btn-light mx-4 "className="btn" >
    
  <img src={tdz} className="img-fluid rounded mx-auto d-block h-15 w-25 " alt="img"/>
  Designing <ArrowForwardIcon/></NavLink>
  </div>
</div>
         </div>
        </div>
        </div>
    </div>

     
     <div className="my-4">
     <div className="container-fluid mb-4">
        <div className="row">
        <div className="col-10 mx-auto">
         <p className="mx-4">Wheather a small Business for dummy text.
         Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
         </p>
        
         <NavLink to="" className="btn btn-primary mx-4 ">Request a call</NavLink>
         </div>
     </div>
     </div>
        </div>
       
     
     <div className="container-fluid mb-5">
        <div className="row">
        <div className="col-10 mx-auto">
        <p className="text-center"><strong>Our Products</strong></p>
         <div className="row gy-4">
         <div class="flex-container bg-dark">
       
        
         <div className="child">
  <NavLink to="" className="btn btn-light mx-4 "className="btn">Website Growvation <ArrowForwardIcon/></NavLink>
  </div>
 
  <div className="child">
  <NavLink to="" className="btn btn-light mx-4 "className="btn">App Indian Defence force <ArrowForwardIcon/></NavLink>
  </div>
  <div className="child">
  <NavLink to="" className="btn btn-light mx-4 " className="btn">Learn App <ArrowForwardIcon/></NavLink>
  </div>
</div>
         </div>
        </div>
        </div>
    </div>
    
     <Call/>
     <Contact/>
     </Paper>
    </ThemeProvider>
    </>);
};
export default Service;