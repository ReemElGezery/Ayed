import React  from 'react';
import '../css/home.css';
import NavBar from '../NavBar'
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import { useTranslation } from 'react-i18next';

const news = () => {
  const { t, i18n } = useTranslation();
    return ( 
        <div>
             <NavBar></NavBar>
            {/* <h1 className="header1">  {t('new3.1')}  </h1>      */}
            <div>
            
       <img
         src="/images/new3.jpg"
        width="400em"
        height="300em"
        className="img"  
    
      />
     
     <p className="link">  {t('new3.1')}  </p>
    
            </div>
            
            <p>  {t('new33.1')}  </p>
    <a href="www.dailynewsegypt.com/2016/05/11/world-cup-could-feature-40-teams-by-2026/">
      <span>source:</span>
   <span>www.dailynewsegypt.com/2016/05/11/world-cup-could-feature-40-teams-by-2026/
</span>
    </a> 
    <CardActions>
         <a href="./news">
             <Button className="button">
             &#8920;  {t('Back.1')}  
 </Button>
         </a>
     </CardActions> 
            
        </div>
     );
}
 
export default news;