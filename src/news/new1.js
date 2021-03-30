import React  from 'react';
import '../css/news1.css';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import NavBar from '../NavBar'
import { useTranslation } from 'react-i18next';
import Typography from '@material-ui/core/Typography';
const news = () => {
  const { t, i18n } = useTranslation();
    return ( 
        <div >
           <NavBar></NavBar>
           {/* <Typography gutterBottom variant="h5" component="h2">
            <p className="header1">{t('new1.1')}</p>    
            </Typography>  */}
            
            <div>
            
       <img
         src="/images/new1.png"
        width="400em"
        height="300em"
       className="img"
    
      />
     
     <p className="link">{t('new1.1')}</p>
    <p> {t('new13.1')}</p>
    <a href="www.dailynewsegypt.com/2016/04/29/mohamed-el-shorbagy-meets-gregory-gaultier-el-gouna-squash-open-final/">
      <span>source:</span>
   <span>www.dailynewsegypt.com/2016/04/29/mohamed-el-shorbagy-meets-gregory-gaultier-el-gouna-squash-open-final/</span>
    </a>
            </div>
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