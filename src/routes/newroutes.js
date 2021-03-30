import React from 'react';
import '../index.css';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import New1 from '../news/new1'
import New2 from '../news/new2'
import New3 from '../news/new3'
import New4 from '../news/new4'
import New5 from '../news/new5'
import New6 from '../news/new6'
import New7 from '../news/new7'
import New8 from '../news/new8'
import New9 from '../news/new9'
import New10 from '../news/new10'
import Ournews from '../news/ournew'
import International from '../news/international'




function Routes() {
  

    return (
      <Router>
      <div className='App'>
     
      
    
      <div className='content'>
       
         <Switch>
         
    
  
         <Route  path="/new1">
         <New1 />
       </Route>
       <Route  path="/new2">
         <New2 />
       </Route>

       <Route  path="/new3">
         <New3 />
       </Route>

       <Route  path="/new4">
         <New4 />
       </Route>

       <Route  path="/new5">
         <New5 />
       </Route>
       <Route  path="/new6">
         <New6 />
       </Route>

       <Route  path="/new7">
         <New7 />
       </Route>

       <Route  path="/new8">
         <New8 />
       </Route>
         
       <Route  path="/new9">
         <New9 />
       </Route>

       <Route  path="/new10">
         <New10 />
       </Route>


       <Route  path="/international">
         <International />
       </Route>

       <Route  path="/ournew">
         <Ournews />
       </Route>
         
         
  

            
         </Switch>
         </div>
     
      
      </div>
      </Router>
    );
  }
  
  export default Routes;
  