import React, { useState } from 'react';
import '../css/products.css';
import '../css/home.css';
import NavBar from '../NavBar'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { useTranslation } from 'react-i18next';
import Footer from '../home/footer'


const list = ['First crop sector', 'Second crop sector', 'Third crop sector'];

const equip = () => {
    const { t, i18n } = useTranslation();

    return (
        <div>
            <NavBar></NavBar>

            <div>
                <h2 className="title4">{t('EquipSec.1')}</h2>

                <div className="caro1">
                    <Carousel  >
                        <div >
                            <img src="/images/equipments/1.jpg"
                                
                            />

                        </div>
                        <div>
                            <img src="/images/equipments/2.jpg"
                                 />

                        </div>
                        <div>
                            <img src="/images/equipments/3.jpg"
                                 />

                        </div>
                    </Carousel>
                    <br></br>
                </div>
                <div lassName="choose">
                    <ul >
                        <a href="/fequipsec">
                            <li className='title' >{t('Fequipsec.1')}</li>
                        </a>
                        <br></br>
                        <a href="/Sequipsec">
                            <li className='title' >{t('Sequipsec.1')}</li>
                        </a>
                        <br></br>
                        <a href="/Tequipsec">
                            <li className='title' >{t('Tequipsec.1')}</li>
                        </a>

                    </ul>
                </div>
            </div>
            <div className="Footer"> 
     <Footer></Footer>
     </div>
        </div>
    );
}
export default equip;