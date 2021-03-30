import React from 'react';
import '../../css/products1.css';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import { useTranslation } from 'react-i18next';

const Feed = () => {
  const { t, i18n } = useTranslation();
  return (

    <div>
      <h1 className="title4">{t('Ffeedsub.1')}</h1>

      <CardActions>
        <a href="./feedsector1">
          <Button className="button">
            &#8920;{t('Back.1')}
        </Button>
        </a>
      </CardActions>

      <div classname="products">
        <div className="flex-container">

          <div classname="box">
            <img
              src="/images/3lf1.png"
              width="200em"
              height="250em"
              className="img "


            />
            <p>{t('feedp1.1')}</p>
            <p className="price">8,500 L.E</p>
          </div>


          <div classname="box">

            <img
              src="/images/3lf6.png"
              width="200em"
              height="250em"
              className="img"

            />
            <p>{t('feedp2.1')}</p>
            <p className="price ">8,300 L.E</p>

          </div>

          <div classname="box">
            <img
              src="/images/3lf7.png"
              width="200em"
              height="250em"
              className="img"

            />
            <p>{t('feedp3.1')}</p>
            <p className="price">8,250 L.E</p>

          </div>
          <div classname="box">
            <img
              src="/images/3lf4.png"
              width="200em"
              height="250em"
              className="img"

            />
            <p>{t('feedp4.1')}</p>
            <p className="price">8,200 L.E</p>

          </div>
          <div classname="box">

            <img
              src="/images/3lf5.png"
              width="200em"
              height="250em"
              className="img"

            />

            <p>{t('feedp5.1')}</p>
            <p className="price">8,100 L.E</p>
          </div>

        </div>
      </div>


    </div>

  );
}

export default Feed;