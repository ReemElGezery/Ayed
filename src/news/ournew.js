import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import '../css/news1.css';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import NavBar from '../NavBar';
import Footer from '../home/footer'
import { useTranslation } from 'react-i18next';

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
      
          <h1 className="headerall">{t('Ournew.1')}</h1>
     
    

    
          <Card className={classes.root}  className="newsstyle" className="img">
      <CardActionArea>
        <a href="./new4">
        <CardMedia
          className={classes.media}
          style={{ height: '21em'}}
          image="/images/new4.jpg"
          
        />
        </a>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
              <a href="./new4" className="link">
              {t('new4.1')}  
          </a>
          </Typography>
          <span style={{fontFamily:"fantasy"}}>Date:May 16,2016</span>
          <Typography variant="body2" color="textSecondary" component="p">
          {t('new41.1')}  
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
    <a href="./new4">
        <Button className="button">
        {t('More.1')}  &#8921;
        </Button>
        </a>
      </CardActions>
    </Card>
    <br></br>
    <Card className={classes.root}  className="newsstyle" className="img">
      <CardActionArea>
        <a href="./new5">
        <CardMedia
          className={classes.media}
          style={{ height: '21em'}}
          image="/images/new5.jpg"
          
        />
        </a>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
              <a href="./new5" className="link">
              {t('new5.1')}
          </a>
          </Typography>
          <span style={{fontFamily:"fantasy"}}>Date:March 19,2016</span>
          <Typography variant="body2" color="textSecondary" component="p">
          {t('new41.1')}  
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
    <a href="./new5">
        <Button className="button">
        {t('More.1')} &#8921;
        </Button>
        </a>
      </CardActions>
    </Card>
    <br></br>

    <Card className={classes.root}  className="newsstyle" className="img">
      <CardActionArea>
        <a href="./new6">
        <CardMedia
          className={classes.media}
          style={{ height: '21em'}}
          image="/images/new6.jpg"
          
        />
        </a>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
              <a href="./new6" className="link">
              {t('new6.1')}
          </a>
          </Typography>
          <span style={{fontFamily:"fantasy"}}>Date:Feb 22,2016</span>
          <Typography variant="body2" color="textSecondary" component="p">
          {t('new41.1')}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
    <a href="./new6">
        <Button className="button">
        {t('More.1')} &#8921;
        </Button>
        </a>
      </CardActions>
    </Card>

    <br></br>

    <Card className={classes.root}  className="newsstyle" className="img">
      <CardActionArea>
        <a href="./new9">
        <CardMedia
          className={classes.media}
          style={{ height: '21em'}}
          image="/images/new9.jpg"
          
        />
        </a>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
              <a href="./new9" className="link"> 
              {t('new9.1')}
          </a>
          </Typography>
          <span style={{fontFamily:"fantasy"}}></span>
          <Typography variant="body2" color="textSecondary" component="p">
          {t('new9.1')}, https://mazra3ty.com/chicks-list/chicks-details/6[...]
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
    <a href="./new9">
        <Button className="button">
        {t('More.1')} &#8921;
        </Button>
        </a>
      </CardActions>
    </Card>
    <div className="Footer"> 
     <Footer></Footer>
     </div>

    
    </div>
  );
  
}
