import React from 'react';
import '../index.css';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Navbar from '../NavBar'
import Feedsector from '../products/feedsector1'
import Equipmentsector from '../products/equipmentsector'
import Crop from '../products/cropsector'
import Pharma from '../products/pharmacsector'
import Chicken from '../products/chickensector'
import Ffeedsec from '../products/feedsectorsub/ffeedsec'
import Sfeedsec from '../products/feedsectorsub/sfeedsec'
import Tfeedsec from '../products/feedsectorsub/tfeedsec'
import Fchickensec from '../products/chickensectorsub/fchickensec'
import Schickensec from '../products/chickensectorsub/schickensec'
import Tchickensec from '../products/chickensectorsub/tchickensec'
import Fequipsec from '../products/equipmentsectorsub/fequipsec'
import Sequipsec from '../products/equipmentsectorsub/sequipsec'
import Tequipsec from '../products/equipmentsectorsub/Tequipsec'
import Fcropsec from '../products/cropsectorsub/fcropsec'
import Scropsec from '../products/cropsectorsub/scropsec'
import Tcropsec from '../products/cropsectorsub/tcropsec'
import Fpharmasec from '../products/pharmasectorsub/fpharmasec'
import Spharmasec from '../products/pharmasectorsub/spharmasec'
import Tpharmasec from '../products/pharmasectorsub/tpharmasec'


function Routes() {
  

    return (
      <Router>
      <div className='App'>
     
      
    
      <div className='content'>
       
         <Switch>
         
    
  
         <Route  path="/feedsector1">
           <Feedsector />
         </Route>
         <Route  path="/equipmentsector">
           <Equipmentsector />
         </Route>
         <Route  path="/cropsector">
           <Crop />
         </Route>
         <Route  path="/pharmacsector">
           <Pharma />
         </Route>
         <Route  path="/chickensector">
           <Chicken/>
         </Route>


         <Route  path="/ffeedsec">
           <Ffeedsec/>
         </Route>
         <Route  path="/sfeedsec">
           <Sfeedsec/>
         </Route>
         <Route  path="/tfeedsec">
           <Tfeedsec/>
         </Route>
  


         <Route  path="/fchickensec">
           <Fchickensec/>
         </Route>
         <Route  path="/schickensec">
           <Schickensec/>
         </Route>
         <Route  path="/tchickensec">
           <Tchickensec/>
         </Route>
  

         <Route  path="/fequipsec">
           <Fequipsec/>
         </Route>
         <Route  path="/sequipsec">
           <Sequipsec/>
         </Route>
         <Route  path="/Tequipsec">
           <Tequipsec/>
         </Route>

         <Route  path="/fcropsec">
           <Fcropsec/>
         </Route>
         <Route  path="/scropsec">
           <Scropsec/>
         </Route>
         <Route  path="/tcropsec">
           <Tcropsec/>
         </Route>

         <Route  path="/fpharmasec">
           <Fpharmasec/>
         </Route>
         <Route  path="/spharmasec">
           <Spharmasec/>
         </Route>
         <Route  path="/tpharmasec">
           <Tpharmasec/>
         </Route>
  
  
  
  
  
         
  

            
         </Switch>
         </div>
     
      
      </div>
      </Router>
    );
  }
  
  export default Routes;
  