import React from 'react';
import '../index.css';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Navbar from '../NavBar'
import Org from '../about/org'
import Manage from '../about/management'
import Aboutfeed from '../about/aboutfeed'
import Aboutchic from '../about/aboutchicken'
import Aboutcrop from '../about/aboutcrop'
import Aboutequip from '../about/aboutequip'
import Aboutpharma from '../about/aboutpharma'
import Resume from '../resume'


function Routes() {
  

    return (
      <Router>
      <div className='App'>
     
      
    
      <div className='content'>
       
         <Switch>
         
    
  
         <Route path="/org">
        <Org/>

      </Route>
      <Route path="/management">
        <Manage/>

      </Route>
      <Route path="/aboutchicken">
        <Aboutchic/>

      </Route>
      <Route path="/aboutfeed">
        <Aboutfeed/>

      </Route>
      <Route path="/aboutcrop">
        <Aboutcrop/>

      </Route>
      
      <Route path="/aboutequip">
        <Aboutequip/>

      </Route>
      
      <Route path="/aboutpharma">
        <Aboutpharma/>

      </Route>
      <Route path="/resume">
        <Resume/>

      </Route>
      
      
         
  

            
         </Switch>
         </div>
     
      
      </div>
      </Router>
    );
  }
  
  export default Routes;
  