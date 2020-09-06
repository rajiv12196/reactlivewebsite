import React  from 'react';
import Navbar from "./Navbar";
import Call from "./Call";
import Contact from "./Contact";
import { NavLink } from 'react-router-dom';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import {Paper } from '@material-ui/core';
import Footercol from "./Footercol";
import Sdata from "./Sdata";
import Card from "./Card";
import MultiCarouselPage from "./MultiCarouselPage";

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
    
    <div className="my-3">
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
<div className="container-fluid mb-5" >
<div className="row">
<div className="col-10 mx-auto">
<div className="row gy-4">
{
    Sdata.map((val,ind)=>{
        return <Card key={ind}
            imgsrc={val.imgsrc}
            title={val.title}
        />


    }  )
}  
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
<div className="row gy-4">
{
    Sdata.map((val,ind)=>{
        return <Card key={ind}
            imgsrc={val.imgsrc}
            title={val.title}
        />


    }  )
}  
</div>
</div>
</div>
</div>
     <Call/>
     <MultiCarouselPage/>
     <Contact/>
    <Footercol/>
     </Paper>
    </ThemeProvider>
    </>);
};
export default Service;