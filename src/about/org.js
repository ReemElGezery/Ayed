import React ,{useState}  from 'react';
import '../css/about.css';
import NavBar from '../NavBar'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Trial from '../trial'
import { useTranslation } from 'react-i18next';
import Footer from '../home/footer'



const org =() =>
{
  const { t, i18n } = useTranslation();

    return(
        <div>
             <NavBar></NavBar>
        
        <div>
        <h2 className="orgheader1">{t('Org.1')}</h2>
        
        {/* <img
         src="/images/meeting.jpg"
        width="500em"
        height="400em"
        
      />
         */}
        <ul >
        <br></br>
            <a href="/management">
        <li className='title' >{t('Management.1')}</li> 
        </a>
        <br></br>
        <a href="/aboutfeed">
        <li className='title'  >{t('Aboutfeed.1')}</li> 
        </a>
        <br></br>
        <a href="/aboutchicken">
        <li className='title' >{t('Aboutchicken.1')}</li> 
        </a>
        <br></br>
        <a href="/aboutequip">
        <li className='title' >{t('Aboutequip.1')}</li> 
        </a>
        <br></br>
        <a href="/aboutpharma">
        <li className='title' >{t('Aboutpharma.1')}</li> 
        </a>
        <br></br>
        <a href="/aboutcrop">
        <li className='title' >{t('Aboutcrop.1')}</li> 
        </a>


  </ul>
  </div>
  <div className="Footer"> 
     <Footer></Footer>
     </div>
  </div>
    );
}
export default org;

