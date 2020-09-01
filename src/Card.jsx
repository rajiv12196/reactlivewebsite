import React  from 'react';
import { NavLink } from 'react-router-dom';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
const Card = (props) =>{
    
    return( 
    <>
    
             <div className="col-md-4 col-10 mx auto" >
             <NavLink to="">
             <div className="card" >
  <img src={props.imgsrc} className="img-fluid rounded mx-auto d-block h-15 w-25 " alt="..."/>
  <div className="card-body">
    <h2 className=" text-center">{props.title} <ArrowForwardIcon/></h2>
    
  
  </div>
</div>
</NavLink>
    </div>

    </>);
};
export default Card;
