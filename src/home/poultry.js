import React from 'react';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import { useTranslation } from 'react-i18next';

const Feed = () => {
  const { t, i18n } = useTranslation();
  return (

    <div>
      <h1 className="header5">{t('poultry.1')}</h1>

      <CardActions>
        <a href="./">
          <Button className="button">
            &#8920;{t('Back.1')}
        </Button>
        </a>
      </CardActions>

      <div classname="products">
        <div className="flex-container">

          <div classname="box">
            <img
              src="/images/poultry/1.jpg"
              width="230em"
              height="230em"
              className="img "


            />

            
          </div>


          <div classname="box">

            <img
              src="/images/poultry/2.jpg"
              width="230em"
              height="230em"
              className="img"

            />

            

          </div>

          <div classname="box">
            <img
              src="/images/poultry/4.jpg"
              width="230em"
              height="230em"
              className="img"

            />

           

          </div>
          <div classname="box">
            <img
              src="/images/poultry/7.jpg"
              width="230em"
              height="230em"
              className="img"

            />

            

          </div>
          <div classname="box">

            <img
              src="/images/poultry/8.jpg"
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
              src="/images/poultry/9.jpg"
              width="230em"
              height="230em"
              className="img "


            />

           
          </div>


          <div classname="box">

            <img
              src="/images/poultry/10.jpg"
              width="230em"
              height="230em"
              className="img"

            />

            

          </div>

          <div classname="box">
            <img
              src="/images/poultry/11.jpg"
              width="230em"
              height="230em"
              className="img"

            />

            

          </div>
          <div classname="box">
            <img
              src="/images/poultry/12.jpg"
              width="230em"
              height="230em"
              className="img"

            />

            

          </div>
          <div classname="box">

            <img
              src="/images/poultry/13.jpg"
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