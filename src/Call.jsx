import React  from 'react';
import web from "../src/Images/logo.jpg"
import { NavLink } from 'react-router-dom';

const Call = () =>{
    
    return( 
    <>
     
  <div className="my-4">
     <div className="container-fluid mb-4">
        <div className="row">
        <div className="col-10 mx-auto">
    <h2 className="mx-4 "><strong>Headline</strong></h2>
    <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
  </p>
 
  <img src={web} className="rounded float-right  " alt="img"/>

     

<NavLink to="/about" className="btn btn-primary mx-4">Show all Products</NavLink>
</div>
</div>
</div>
</div>

    </>);
};
export default Call;