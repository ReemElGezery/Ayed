import React, { useState } from 'react';
import '../css/products.css';
import '../css/home.css';
import NavBar from '../NavBar'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { useTranslation } from 'react-i18next';
import Footer from '../home/footer'


const list = ['First crop sector', 'Second crop sector', 'Third crop sector'];

const crop = () => {
    const { t, i18n } = useTranslation();

    return (
        <div>
            <NavBar></NavBar>

            <div>
                <h2 className="title4">{t('Cropsec.1')}</h2>

                <div className="caro1">
                    <Carousel  >
                        <div >
                            <img src="/images/crop/3.jpg"
                                
                            />

                        </div>
                        <div>
                            <img src="/images/crop/2.jpg"
                                 />

                        </div>
                        <div>
                            <img src="/images/crop/1.jpg"
                                 />

                        </div>
                    </Carousel>
                    <br></br>
                </div>
                <div lassName="choose">
                    <ul >
                        <a href="/fcropsec">
                            <li className='title' >{t('Fcropsec.1')}</li>
                        </a>
                        <br></br>
                        <a href="/scropsec">
                            <li className='title' >{t('Scropsec.1')}</li>
                        </a>
                        <br></br>
                        <a href="/Tcropsec">
                            <li className='title' >{t('Tcropsec.1')}</li>
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
export default crop;