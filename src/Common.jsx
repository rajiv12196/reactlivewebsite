import React  from 'react';

import { NavLink } from 'react-router-dom';
import tdz from "../src/Images/Tdz.png";
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import {Paper } from '@material-ui/core';

const Common = (props) =>{
    
  const theme = createMuiTheme({
    palette:{
       type:"dark",
    },
  });
    return( 
    <>
    <ThemeProvider theme={theme}>
    <Paper >
     <div className="parent_div">
  <div className="child_div">
  
  <img src={tdz} className="img-fluid rounded mx-auto d-block h-15 w-25 " alt="img"/>
  <div className="center">
  <NavLink className="button" to={props.visit}><span>{props.btname} </span></NavLink>
  </div>
  </div>
</div>
 
</Paper>
    </ThemeProvider>
    </>);
};
export default Common;
