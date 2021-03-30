import React ,{useState}  from 'react';
import '../css/products.css';
import '../css/home.css';
import NavBar from '../NavBar'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import SimpleImageSlider from "react-simple-image-slider";
import { useTranslation } from 'react-i18next';



const opening =() =>
{
    
    const { t, i18n } = useTranslation();
    return(
        <div>
             <NavBar></NavBar>
        
        
        <h2 className="headerall">{t('opening.1')}</h2>
      
<div className="caro1">
<Carousel >
                <div >
                    <img src="/images/opening/1.jpg" />
                    
                </div>
                <div>
                    <img src="/images/opening/2.jpg" />
                    
                </div>
                <div>
                    <img src="/images/opening/3.jpg" />
                   
                </div>
                <div >
                    <img src="/images/opening/4.jpg" />
                    
                </div>
                <div>
                    <img src="/images/opening/5.jpg"/>
                    
                </div>
                <div>
                    <img src="/images/opening/6.jpg" />
                   
                </div>
                <div >
                    <img src="/images/opening/7.jpg"/>
                    
                </div>
                <div>
                    <img src="/images/opening/8.jpg" />
                    
                </div>
                <div>
                    <img src="/images/opening/9.jpg" />
                   
                </div>
                <div>
                    <img src="/images/opening/10.jpg" />
                   
                </div>
            </Carousel>
            </div>
            

  
  
  </div>
    );
}
export default opening;

