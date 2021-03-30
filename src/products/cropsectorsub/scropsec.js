import React from 'react';
import '../../css/products1.css';
//import NavBar from '../NavBar'
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import { useTranslation } from 'react-i18next';

const Feed = () => {
    const { t, i18n } = useTranslation();
    return (

        <div>
            <h1 className="title4">{t('Scropsub.1')}</h1>
            

            <CardActions>
                <a href="./cropsector">
                    <Button className="button">
                    &#8920;{t('Back.1')}
        </Button>
                </a>
            </CardActions>

            <div classname="products">
                <div className="flex-container">

                    <div classname="box">
                        <img
                            src="/images/crop2.JPG"
                            width="300em"
                            height="260em"
                            className="img"


                        />
                        <p>{t('cropp2.1')} </p>
                        <p className="price">43 L.E</p>
                    </div>




                </div>
            </div>
        </div>

    );
}

export default Feed;