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
            <h1 className="header5">{t('Aboutcrop.1')}</h1>

            <div class="flex-container">
            <div className="c5">   
            <img
         src="/images/abdo.jpg"
        width="250em"
        height="250em"
        className="img1  "  
    
      />  
            
                <text>{t('Gawad.1')}</text>
                <p className="link">{t('Gawad2.1')} </p>
            
            <a href="/resume">
            <button className="button4">{t('Resume.1')}</button>
            </a>
            </div>

            <div className="c5">
            <img
         src="/images/attia.jpg"
        width="250em"
        height="250em"
        className="img1 "  
    
      />  
            
            <div>
                <text>{t('Attia.1')}</text>
                <p className="link" >{t('Attia2.1')}</p>
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