import React  from 'react';
import { NavLink } from 'react-router-dom';
import CancelPresentationIcon from '@material-ui/icons/CancelPresentation';
import {Link} from "react-scroll";

const Navbar = () =>{
    
    return( 
    <>
    <div className="container-fluid nav_bg">
        <div className="row">
        <div className="col-10 mx-auto">

       
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
  <NavLink className="navbar-brand" to="#"> <CancelPresentationIcon/>The D-zone</NavLink>
  <button className="navbar-toggler" type="button " data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item active">
        <NavLink exact className="nav-link " to="/">Home <span class="sr-only">(current)</span></NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/service">Service</NavLink>
      </li>
      <li className="nav-item">
      <Link activeClass="active"
      to="/#contact"
      spy={true}
      smooth={true}
      hashSpy={true}
      offset={50}
      duration={500}  className="nav-link" >Contact</Link>
      </li>
      
      <li class="nav-item">
        <NavLink className="nav-link" to="/about">About</NavLink>
      </li>
      
     
    </ul>
    
  </div>
  
</nav>
    </div>
        </div>
    </div>  

    </>);
};
export default Navbar;