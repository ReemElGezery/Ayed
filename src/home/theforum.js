import React from 'react';
import '../css/home.css';
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
      
          <h1 className="headerall">{t('Forum.1')}</h1>
     
    <Card className="forumstyle" >
      <CardActionArea>
        
        <CardMedia
        
          className={classes.media}
          style={{ height: '21em'}}
          image="/images/forum1.jpg"
          className="img"
          
        />
        
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2" className="link">     
          {t('Equipmentforum.1')}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p" className="link">
          {t('Equipmentforum2.1')}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>


    <Card className={classes.root} className="forumstyle" >
      <CardActionArea>
        
        <CardMedia
        
          className={classes.media}
          style={{ height: '21em'}}
          image="/images/forum2.jpg"
          className="img"
          
        />
        
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2" className="link">       
          {t('Feedforum.1')}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p" className="link">
          {t('Feedforum2.1')}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>

    <Card className={classes.root} className="forumstyle" >
      <CardActionArea>
        
        <CardMedia
        
          className={classes.media}
          style={{ height: '21em'}}
          image="/images/forum3.jpg"
          className="img"
          
        />
        
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2" className="link">     
          {t('Pharmaceuticalforum.1')}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p" className="link">
          {t('Pharmaceuticalforum2.1')}
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
