import React from 'react';
import '../css/about.css';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import NavBar from '../NavBar';
import { useTranslation } from 'react-i18next';
import Footer from '../home/footer'

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function MediaCard() {
  const { t, i18n } = useTranslation();
  const classes = useStyles();

  return (
      <div>
          <NavBar></NavBar>
   
          <h1 className="orgheader">{t('Aboutthegroup.1')}</h1>
     
    <Card className={classes.root} style={{ maxWidth: '90%' , marginLeft:'4em'}} className="img" className="card">
      <CardActionArea >  
       
        <CardMedia
       
          className={classes.media}
          
         className="aboutus1"
          image="/images/co.jpg"
          
        />
       
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2" style={{color:"#012637" ,fontWeight:"bold",fontfamily:'Franklin Gothic Medium'}}>
            
              {t('Message2.1')} 
   
          </Typography>
          
        </CardContent>
      </CardActionArea>
     
    </Card>

<br></br>
    <Card className={classes.root} style={{ maxWidth: '90%' , marginLeft:'4em'}}className="img" className="card">
      <CardActionArea >
       
        <CardMedia
          className={classes.media}
          className="aboutus2"
          image="/images/2.jpg"
         
        />

       
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2" style={{color:"#012637" ,fontWeight:"bold",fontfamily:'Franklin Gothic Medium'}}>
              
              {t('About2.1')}
         
          </Typography>
          
         
        </CardContent>
      </CardActionArea>
    
    </Card>
    <div className="Footer"> 
     <Footer></Footer>
     </div>


    </div>
  );
  
}
