import React  from 'react';
import NavBar from '../NavBar'
import '../css/about.css';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import { useTranslation } from 'react-i18next';

const manage = () => {
  const { t, i18n } = useTranslation();
    return ( 
        <div>
             <NavBar></NavBar>
             <CardActions>
    <a href="./org">
        <Button className="button">
        &#8920;{t('Back.1')}
        </Button>
        </a>
      </CardActions>
            <h1 className="header5">{t('Aboutequip.1')}</h1>

            <div class="flex-container">
            <div className="c8">   
            <img
         src="/images/sadik.jpg"
        width="250em"
        height="250em"
        className="img1 "  
    
      />  
            
                <text>{t('Sadik.1')}</text>
                <p className="link">{t('Sadik2.1')}</p>
                <p>01015101592&#128241;</p>
            
            <a href="/resume">
            <button className="button4">{t('Resume.1')}</button>
            </a>
            </div> 

            <div className="c9" >   
            <img
         src="/images/magdy.jpg"
        width="250em"
        height="250em"
        className="img1 "  
    
      />  
            
                <text>{t('Magdy.1')}</text>
                <p className="link">{t('Magdy.1')} </p>
                <p>01206705055&#128241;</p>
            
            <a href="/resume">
            <button className="button4">{t('Resume.1')}</button>
            </a>
            </div> 

            <div className="c1">
            <img
         src="/images/zakaria.jpg"
        width="250em"
        height="250em"
        className="img1 "  
    
      />  
           
            <div>
                <text>{t('Zakaria.1')}</text>
                <p className="link">{t('Zakaria2.1')}</p>
                <p>01025924294&#128241;</p>
            </div>
            <a href="/resume">
            <button className="button4">{t('Resume.1')}</button>
            </a>
            <br></br>
            </div> 

            <div className="c10">
            <img
         src="/images/zaidan.jpg"
        width="250em"
        height="250em"
        className="img1"  
    
      />  
            
            <div>
                <text>{t('Zaidan.1')}</text>
                <p className="link">{t('Zaidan2.1')}</p>
                <p>01002303130&#128241;</p>
            </div>
            <a href="/resume" > 
            <button className="button4">{t('Resume.1')}</button>
            </a>
        </div>
        
        </div> 

        
        </div>
     );
}
 
export default manage;