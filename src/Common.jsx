import React  from 'react';
import web from "../src/Images/logo.jpg"
import { NavLink } from 'react-router-dom';
import tdz from "../src/Images/Tdz.png";

const Common = (props) =>{
    
    return( 
    <>
     <div className="parent_div">
  <div className="child_div">
  
  <img src={tdz} className="img-fluid rounded mx-auto d-block h-15 w-25 " alt="img"/>
  <div className="center">
  <NavLink className="button" to={props.visit}><span>{props.btname} </span></NavLink>
  </div>
  </div>
</div>
 <div className="parent_div1">
  <div className="child_div1">
  
  <img src={tdz} className="img-fluid rounded mx-auto d-block h-15 w-25 " alt="img"/>
  <div className="center">
  <NavLink className="button" to={props.visit}><span>{props.btname} </span></NavLink>
  </div>
  </div>
</div>
     

    </>);
};
export default Common;
