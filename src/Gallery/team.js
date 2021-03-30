import React from 'react';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import { useTranslation } from 'react-i18next';

const Feed = () => {
  const { t, i18n } = useTranslation();
  return (


    <div>
      <h1 className="headerall">{t('team.1')}</h1>

      <CardActions>
        <a href="./gallery">
          <Button className="button">
            &#8920;{t('Back.1')}
        </Button>
        </a>
      </CardActions>

      <div classname="products">
        <div className="flex-container">

          <div classname="box">
            <img
              src="/images/reem/1.jpg"
              width="230em"
              height="230em"
              className="img "


            />

           
          </div>


          <div classname="box">

            <img
              src="/images/reem/2.jpg"
              width="230em"
              height="230em"
              className="img"

            />

          </div>

          <div classname="box">
            <img
              src="/images/reem/3.jpg"
              width="230em"
              height="230em"
              className="img"

            />

           

          </div>
          <div classname="box">
            <img
              src="/images/reem/4.jpg"
              width="230em"
              height="230em"
              className="img"

            />

           

          </div>
          <div classname="box">

            <img
              src="/images/reem/5.jpg"
              width="230em"
              height="230em"
              className="img"

            />


          
          </div>





        </div>

        <br></br>
        <div className="flex-container">

          <div classname="box">
            <img
              src="/images/reem/6.jpg"
              width="230em"
              height="230em"
              className="img "


            />

           
          </div>


          <div classname="box">

            <img
              src="/images/reem/7.jpg"
              width="230em"
              height="230em"
              className="img"

            />

       

          </div>

          <div classname="box">
            <img
              src="/images/reem/8.jpg"
              width="230em"
              height="230em"
              className="img"

            />

          

          </div>
          <div classname="box">
            <img
              src="/images/reem/9.jpg"
              width="230em"
              height="230em"
              className="img"

            />

          

          </div>
         


     



        </div>




</div>


      </div>

  );
}

export default Feed;