import React from 'react';
import '../../css/products1.css';
//import NavBar from '../NavBar'
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import { useTranslation } from 'react-i18next';

const Pharma= () => {
    const { t, i18n } = useTranslation();
    return (

        <div>
            <h1 className="title4">{t('Tpharmasub.1')}</h1>
            

            <CardActions>
                <a href="./pharmacsector">
                    <Button className="button">
                    &#8920; {t('Back.1')}
        </Button>
                </a>
            </CardActions>

            <div classname="products">
                <div className="flex-container">

                    <div classname="box">
                        <img
                            src="/images/adwya3.jpg"
                            width="248em"
                            height="250em"
                            className="img"


                        />
                        <p>{t('Pharmap3.1')}</p>
                        <p className="price">40 L.E</p>
                    </div>




                </div>
            </div>
        </div>

    );
}

export default Pharma;