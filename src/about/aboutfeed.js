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
            <h1 className="header5">{t('Aboutfeed.1')}</h1>

            <div class="flex-container">
            <div className="c1">   
            <img
         src="/images/essa.jpg"
        width="250em"
        height="250em"
        className="img1 "  
    
      />  
            
                <text>{t('Essa.1')}</text>
                <p className="link">{t('Essa2.1')} </p>
                <a href="http://www.gmail.com" className="link">
              <p style={{fontSize:"15px"}}className="link3" > sales@samyayedgroup.com&#x2709;</p>  
                </a>
                <p>01004558822&#128241;</p>
            
            
            <a href="/resume">
            <button className="button4">{t('Resume.1')}</button>
            </a>
            </div> 

            <div className="c2">
            <img
         src="/images/abdo.jpg"
        width="250em"
        height="250em"
        className="img1 "  
    
      />  
           
            <div>
                <text>{t('Gawad.1')}</text>
                <p className="link">{t('Gawad2.1')}</p>
                <a href="http://www.gmail.com" className="link">
              <p style={{fontSize:"15px"}} className="link3"> sales@samyayedgroup.com&#x2709;</p>  
                </a>
                <p>01008443399&#128241;</p>
            
            </div>
            <a href="/resume">
            <button className="button4">{t('Resume.1')}</button>
            </a>
            <br></br>
            </div> 

            <div className="c3">
            <img
         src="/images/attia.jpg"
        width="250em"
        height="250em"
        className="img1 "  
    
      />  
            
            <div>
                <text>{t('Attia.1')}</text>
                <p className="link">{t('Attia2.1')}</p>
                <a href="http://www.gmail.com" className="link">
              <p style={{fontSize:"15px"}} className="link3"> sales@samyayedgroup.com&#x2709;</p>  
                </a>
                <p>002 048 2630141&#128241;</p>
                <p>01003361832&#128241;</p>
            
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