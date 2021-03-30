
import React  ,{ Component } from 'react';
import './index.css';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Homepage from './home/Homepage';
import Trial from './trial';
import { Navbar } from 'react-bootstrap';
import Routes from './routes/Homeroutes'
import Productroutes from './routes/productsroutes'
import Newroutes from './routes/newroutes'
import Aboutroutes from './routes/aboutroutes'
import Galleryroutes from './routes/galleryroutes'
import ClipLoader from "react-spinners/PropagateLoader";
import {useState,useEffect} from 'react';

function App() {
  const[loading,setloading]= useState(false);
  
  useEffect(()=> {
    setloading(true)
    setTimeout(()=>{
   setloading(false)
    },3000
    )


  },[]

  )

  return (
    <div>

{

loading ?
<div>
<ClipLoader color={"#943741"} 
loading={loading} 
size={30} 
css={`

 display:flex;
 justify-content: center;
 align-items: center;
 height:100vh

`}

/>
</div>
 :
 <div>
 <Routes></Routes>
    <Productroutes></Productroutes>
    <Newroutes></Newroutes>
    <Aboutroutes></Aboutroutes>
    <Galleryroutes></Galleryroutes>
    </div>

  }


    
    </div>
  );
}

export default App;
