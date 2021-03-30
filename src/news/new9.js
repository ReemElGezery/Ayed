import React  from 'react';
import '../css/home.css';
import NavBar from '../NavBar'
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import { useTranslation } from 'react-i18next'

const news = () => {
  const { t, i18n } = useTranslation();
    return ( 
        <div>
             <NavBar></NavBar>
            {/* <h1 className="header1">{t('new9.1')}</h1>      */}
            <div>
            
       <img
         src="/images/new9.jpg"
        width="400em"
        height="300em"
        className="img"  
    
      />
     
     <p className="link">{t('new9.1')}</p>
    
            </div>
            
           
    <a href="https://mazra3ty.com/chicks-list/chicks-details/6">
      <span>source:</span>
   <span> https://mazra3ty.com/chicks-list/chicks-details/6
</span>
    </a>  
    <CardActions>
         <a href="./news">
             <Button className="button">
             &#8920; Back
 </Button>
         </a>
     </CardActions>
            
        </div>
     );
}
 
export default news;