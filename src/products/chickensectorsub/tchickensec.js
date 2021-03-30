import React from 'react';
import '../../css/products1.css';
//import NavBar from '../NavBar'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import SimpleImageSlider from "react-simple-image-slider";
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import { useTranslation } from 'react-i18next';


const Feed = () => {
    const { t, i18n } = useTranslation();
    return (

        <div>
            <h1 className="title4">{t('Tchicksub.1')}</h1>
           
            <CardActions>
                <a href="./chickensector">
                    <Button className="button">
                    &#8920;{t('Back.1')}
        </Button>
                </a>
            </CardActions>

            <div classname="products">
                <div className="flex-container">

                    <div classname="box">
                        <img
                            src="/images/katkoot3.jpg"
                            width="240em"
                            height="250em"
                            className="img"


                        />
                        <p>{t('chickp3.1')} </p>
                        <p className="price">90 L.E</p>
                    </div>




                </div>
            </div>
        </div>

    );
}

export default Feed;