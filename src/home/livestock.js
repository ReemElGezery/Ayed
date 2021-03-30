import React from 'react';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import { useTranslation } from 'react-i18next';

const Feed = () => {
  const { t, i18n } = useTranslation();
  return (

    <div>
      <h1 className="header5">{t('livestock.1')}</h1>

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
              src="/images/livestock/mwashy1.jpg"
              width="230em"
              height="230em"
              className="img "


            />

            {/* <p className="price">{t('livestock.1')} </p> */}
          </div>


          <div classname="box">

            <img
              src="/images/livestock/mwashy2.jpg"
              width="230em"
              height="230em"
              className="img"

            />

            {/* <p className="price ">{t('livestock.1')} </p> */}

          </div>

          <div classname="box">
            <img
              src="/images/livestock/mwashy3.jpg"
              width="230em"
              height="230em"
              className="img"

            />

            {/* <p className="price">{t('livestock.1')} </p> */}

          </div>
          <div classname="box">
            <img
              src="/images/livestock/mwashy4.jpg"
              width="230em"
              height="230em"
              className="img"

            />

            {/* <p className="price">{t('livestock.1')} </p> */}

          </div>
          <div classname="box">

            <img
              src="/images/livestock/mwashy5.jpg"
              width="230em"
              height="230em"
              className="img"

            />


            {/* <p className="price">{t('livestock.1')} </p> */}
          </div>





        </div>

        <br></br>
        <div className="flex-container">

          <div classname="box">
            <img
              src="/images/livestock/mwashy7.jpg"
              width="230em"
              height="230em"
              className="img "


            />

            {/* <p className="price">{t('livestock.1')} </p> */}
          </div>


          <div classname="box">

            <img
              src="/images/livestock/mwashy8.jpg"
              width="230em"
              height="230em"
              className="img"

            />

            {/* <p className="price ">{t('livestock.1')} </p> */}

          </div>

         



        </div>




</div>


      </div>

  );
}

export default Feed;