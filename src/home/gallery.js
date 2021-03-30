import React ,{useState}  from 'react';
import '../css/about.css';
import NavBar from '../NavBar'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Trial from '../trial'
import { useTranslation } from 'react-i18next';
import Footer from '../home/footer'



const gallery =() =>
{
  const { t, i18n } = useTranslation();

    return(
        <div>
             <NavBar></NavBar>
        
        <div>
        <h2 className="orgheader1">{t('Gallery.1')}</h2>
       

        <ul >
        <br></br>
            <a href="/opening">
        <li className='titleg' >{t('opening.1')}</li> 
        </a>
        <br></br>
        <a href="/team">
        <li className='titleg'  >{t('team.1')}</li> 
        </a>
        <br></br>
        <a href="/labs">
        <li className='titleg' >{t('labs.1')}</li> 
        </a>
       


  </ul>
  </div>
  <div className="Footer"> 
     <Footer></Footer>
     </div>
  </div>
    );
}
export default gallery;



