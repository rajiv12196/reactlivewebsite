import React from 'react';
import Home from "./Home";
import { Switch ,Route, Redirect, NavLink } from "react-router-dom";
//import Contact from "./Contact";
import Service from "./Service";
import About from "./About";
//import Navbar from "./Navbar";




const App = () =>{
    
   
    return( 
    <>
    
    <Switch>
    
    <Route exact path="/" component={Home} />
    <Route exact path="/about" component={About} />
    <Route exact path="/service" component={Service} />
    
    <Redirect to="/" />
    
    <Home/>
   
    <About/>
    <Service/>
    </Switch>
    </>
    );
};

export default App;
