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
            <h1 className="title4">{t('Sequipsub.1')}</h1>
            

            <CardActions>
                <a href="./equipmentsector">
                    <Button className="button">
                    &#8920; {t('Back.1')}
        </Button>
                </a>
            </CardActions>

            <div classname="products">
                <div className="flex-container">

                    <div classname="box">
                        <img
                            src="/images/Equipment2.jpg"
                            width="250em"
                            height="250em"
                            className="img"


                        />
                        <p>{t('equipp2.1')}</p>
                        <p className="price">1,500 L.E</p>
                    </div>




                </div>
            </div>
        </div>

    );
}

export default Feed;