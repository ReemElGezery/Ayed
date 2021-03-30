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
            <h1 className="header5">{t('Management.1')}</h1>

            <div class="flex-container">
            <div className="c1">   
            <img
         src="/images/samyayedpic.jpg"
        width="250em"
        height="250em"
        className="img1 "  
    
      />  
            
                <text >{t('Samy.1')}</text>
                <p className="link">{t('Samy2.1')}</p>
                <a href="http://www.gmail.com">
              <p style={{fontSize:"15px"}} className="link3"> chairman@samyayedgroup.com&#x2709;</p>  
                </a>
            
            <a href="/resume">
            <button className="button4">{t('Resume.1')}</button>
            </a>
            </div> 

            <div className="c2">
            <img
         src="/images/ahmedelkhataby.jpg"
        width="250em"
        height="250em"
        className="img1 "  
    
      />  
           
            <div>
                <text>{t('Khataby.1')}</text>
                <p className="link">{t('Khataby2.1')}</p>
                <a href="http://www.gmail.com" className="link">
              <p style={{fontSize:"15px"}} className="link3"> info@samyayedgroup.com&#x2709;</p>  
                </a>
                <p>01023469333&#128241;</p>
            </div>
            <a href="/resume">
            <button className="button4">{t('Resume.1')}</button>
            </a>
            <br></br>
            </div> 

            <div className="c3"> 
            <img
         src="/images/ashraffayed.jpg"
        width="250em"
        height="250em"
        className="img1 "  
    
      />  
            
            <div>
                <text>{t('Fayed.1')}</text>
                <p className="link">{t('Fayed2.1')}</p>
                <p>01225599987&#128241;</p>
                <p>01203433371&#128241;</p>
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