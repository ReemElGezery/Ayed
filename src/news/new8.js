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
            {/* <h1 className="header1">{t('new8.1')}</h1>      */}
            <div>
            
       <img
         src="/images/new8.jpg"
        width="400em"
        height="300em"
        className="img"  
    
      />
     
     <p className="link">{t('new8.1')}</p>
    
            </div>
            
            <p> {t('new83.1')}</p>
    <a href="www.youm7.com/story/2016/5/16/ Surprise-cancel-friendly-Congo-be fined-Jabalaya-70-thousand-dollars / 2720021">
      <span>source:</span>
   <span> www.youm7.com/story/2016/5/16/ Surprise-cancel-friendly-Congo-be fined-Jabalaya-70-thousand-dollars / 2720021
</span>
    </a>  
    <CardActions>
         <a href="./news">
             <Button className="button">
             &#8920;{t('Back.1')}
 </Button>
         </a>
     </CardActions>
            
        </div>
     );
}
 
export default news;