import React from 'react';
import '../index.css';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Homepage from '../home/Homepage';
import Aboutus from '../home/aboutus';
import News from '../home/news1';
import Theforum from '../home/theforum';
import Contactus from '../trial';
import Gallery from '../home/gallery';
import Videos from '../home/videos';
import Footer from '../home/footer';

import Chicks from '../home/chicks';
import Feed from '../home/feed';
import Equipment from '../home/Equipment';
import Poultry from '../home/poultry';
import Livestock from '../home/livestock';

import { Navbar } from 'react-bootstrap';




function Routes() {
  

  return (
    <Router>
    <div >
    {/* <Navbar/> */}
    
  
    <div >
     
       <Switch>
       <Route exact path="/">
       <Homepage />
       </Route>

       <Route  path="/aboutus">
         <Aboutus />
       </Route>
       <Route  path="/products">
         {/* <Products /> */}
       </Route>
       <Route  path="/news">
         <News />
       </Route>
       <Route  path="/theforum">
          <Theforum /> 
       </Route>
       <Route  path="/gallery">
         <Gallery />
       </Route>

       <Route  path="/videos">
         <Videos />
       </Route>

       <Route  path="/trial">
         <Contactus />
       </Route>


        <Route  path="/chicks">
         <Chicks />
       </Route>
       <Route  path="/livestock">
         <Livestock />
       </Route>
       <Route  path="/poultry">
         <Poultry />
       </Route>
       <Route  path="/feed">
         <Feed />
       </Route>
       <Route  path="/equipment">
         <Equipment />
       </Route>



       <Route  path="/footer">
         <Footer />
       </Route>


     
      
       
       
          
       </Switch>
       </div>
   
    
    </div>
    </Router>
  );
}

export default Routes;
