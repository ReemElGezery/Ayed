import React from 'react';
import '../index.css';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Opening from '../Gallery/opening';
import Team from '../Gallery/team';
import Labs from '../Gallery/labs';

import { Navbar } from 'react-bootstrap';




function Routes() {
  

  return (
    <Router>
    <div className='App'>
    <Navbar/>
    
  
    <div className='content'>
     
       <Switch>
       
       <Route  path="/opening">
         <Opening />
       </Route>


       <Route  path="/team">
         <Team/>
       </Route>

       <Route  path="/labs">
         <Labs/>
       </Route>




       


     
      
       
       
          
       </Switch>
       </div>
   
    
    </div>
    </Router>
  );
}

export default Routes;
