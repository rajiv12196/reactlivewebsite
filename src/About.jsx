import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import web1 from "../src/Images/Tdz.png";


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: 500,
  },
}));

export default function FullWidthTabs() {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    
    <div className={classes.root} className="tab1" >
      <AppBar position="static" color="default">
        <Tabs 
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="Design" {...a11yProps(0)} />
          <Tab label="Development" {...a11yProps(1)} />
          <Tab label="Hosting" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
         <div className="Container">
         <img src={web1} alt="..." className="img-thumbnail rounded float-left w-25 h-25"/>
         <h2> UI /UX Design</h2>
         <br></br><hr></hr>
         <br></br>
        
         <h2> Price:         to  </h2>
         </div>
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
        <div className="Container">
         <img src={web1} alt="..." className="img-thumbnail rounded float-left w-25 h-25"/>
         <h2> Logo Design</h2>
         <br></br><hr></hr>
         <br></br>
        
         <h2> Price:         to  </h2>
         </div>
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
        <div className="Container">
         <img src={web1} alt="..." className="img-thumbnail rounded float-left w-25 h-25"/>
         <h2> UI /UX Design</h2>
         <br></br><hr></hr>
         <br></br>
        
         <h2> Price:         to  </h2>
         </div>
        </TabPanel>
      </SwipeableViews>
    </div>
  );
}
