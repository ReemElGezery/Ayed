import React ,{useState}  from 'react';
import '../css/products.css';
import '../css/home.css';
import NavBar from '../NavBar'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import SimpleImageSlider from "react-simple-image-slider";
import { useTranslation } from 'react-i18next';


const labs =() =>
{
    const { t, i18n } = useTranslation();

    return(
        <div>
             <NavBar></NavBar>
        
        
        <h2 className="headerall">{t('labs.1')}</h2>
      
<div className="caro1">
<Carousel >
               
                <div >
                    <img src="/images/labs/11.jpg" />
                    
                </div><div >
                    <img src="/images/labs/12.jpg" />
                    
                </div><div >
                    <img src="/images/labs/13.jpg" />
                    
                </div><div >
                    <img src="/images/labs/14.jpg" />
                    
                </div><div >
                    <img src="/images/labs/15.jpg" />
                    
                </div>
                <div >
                    <img src="/images/labs/16.jpg" />
                    
                </div>
                <div >
                    <img src="/images/labs/17.jpg" />
                    
                </div>
            </Carousel>
            </div>
            

  
  
  </div>
    );
}
export default labs;

