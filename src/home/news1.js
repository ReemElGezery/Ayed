import React from 'react';
import '../css/news1.css';
import { makeStyles } from '@material-ui/core/styles';
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
          
    <a href="./ournew">
        <Button  className="buttonour">
        {t('Ournew.1')}
        </Button>
        </a>
        
      
    <a href="./international">
        <Button className="buttonint"  >
        {t('International.1')}
        </Button>
        </a>
      
          <h1 className="headerall">{t('All.1')}</h1>
     
    <Card className={classes.root}  className="newsstyle" className="img">
      <CardActionArea>
        <a href="./new1">
        <CardMedia
          className={classes.media}
          style={{ height: '21em'}}
          image="/images/new1.png"
          
        />
        </a>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
              <a href="./new1" className="link">
              {t('new1.1')}  
          
          </a>
          </Typography>
          <span >Date:May 16,2016</span>
          <Typography variant="body2" color="textSecondary" component="p">
          {t('new12.1')} 
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
    <a href="./new1">
        <Button className="button">
        {t('More.1')}  &#8921;
        </Button>
        </a>
      </CardActions>
    </Card>

<br></br>
    <Card className={classes.root} className="newsstyle"className="img">
      <CardActionArea>
        <a href="./new2">
        <CardMedia
          className={classes.media}
          style={{ height: '21em'}}
          image="/images/new2.jpg"
         
        />
        </a>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
              <a href="./new2" className="link">
              {t('new2.1')}
          </a>
          </Typography>
          <span >Date:May 16,2016</span>
          <Typography variant="body2" color="textSecondary" component="p">
          {t('new21.1')}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
    <a href="./new2">
        <Button className="button">
        {t('More.1')} &#8921;
        </Button>
        </a>
      </CardActions>
    </Card>
    <br></br>
    <Card className={classes.root}  className="newsstyle" className="img">
      <CardActionArea>
        <a href="./new3">
        <CardMedia
          className={classes.media}
          style={{ height: '21em'}}
          image="/images/new3.jpg"
          
        />
        </a>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
              <a href="./new3" className="link">
              {t('new3.1')}  
          </a>
          </Typography>
          <span >Date:May 16,2016</span>
          <Typography variant="body2" color="textSecondary" component="p">
          {t('new31.1')}  
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
    <a href="./new3">
        <Button className="button">
        {t('More.1')} &#8921;
        </Button>
        </a>
      </CardActions>
    </Card>
    <br></br>
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
          <span >Date:May 16,2016</span>
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
    <Card className={classes.root} className="newsstyle" className="img">
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
          <span >Date:March 19,2016</span>
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

    <Card className={classes.root} className="newsstyle" className="img">
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
          <span >Date:Feb 22,2016</span>
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
        <a href="./new7">
        <CardMedia
          className={classes.media}
          style={{ height: '21em'}}
          image="/images/new7.jpg"
          
        />
        </a>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
              <a href="./new7" className="link">
              {t('new7.1')} 
          </a>
          </Typography>
          <span >Date:May 16,2016</span>
          <Typography variant="body2" color="textSecondary" component="p">
          {t('new71.1')}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
    <a href="./new7">
        <Button className="button">
        {t('More.1')} &#8921;
        </Button>
        </a>
      </CardActions>
    </Card>

    <br></br>
    <Card className={classes.root}  className="newsstyle" className="img">
      <CardActionArea>
        <a href="./new8">
        <CardMedia
          className={classes.media}
          style={{ height: '21em'}}
          image="/images/new8.jpg"
          
        />
        </a>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
              <a href="./new8" className="link">
              {t('new8.1')}
          </a>
          </Typography>
          <span >Date:Feb 22,2016</span>
          <Typography variant="body2" color="textSecondary" component="p">
          {t('new81.1')}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
    <a href="./new8">
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

    <br></br>
    <Card className={classes.root}  className="newsstyle" className="img">
      <CardActionArea>
        <a href="./new10">
        <CardMedia
          className={classes.media}
          style={{ height: '21em'}}
          image="/images/new10.jpg"
          
        />
        </a>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
              <a href="./new10" className="link">
              {t('new10.1')}
          </a>
          </Typography>
          <span >Date:May 16,2016</span>
          <Typography variant="body2" color="textSecondary" component="p">
          {t('new101.1')}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
    <a href="./new10">
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
