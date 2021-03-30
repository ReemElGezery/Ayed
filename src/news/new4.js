import React  from 'react';
import '../css/home.css';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import NavBar from '../NavBar'
import { useTranslation } from 'react-i18next';

const news = () => {
  const { t, i18n } = useTranslation();
    return ( 
        <div>
             <NavBar></NavBar>
            {/* <h1 className="header1">{t('new4.1')}  </h1>      */}
            <div>
            
       <img
         src="/images/new4.jpg"
        width="400em"
        height="300em"
        className="img"  
    
      />
     
     <p className="link">{t('new4.1')}  </p>
    
            </div>
            <p>{t('new43.1')}  </p>
    
            <CardActions>
         <a href="./news">
             <Button className="button">
             &#8920; {t('Back.1')}  
 </Button>
         </a>
     </CardActions>
           
            
        </div>
     );
}
 
export default news;