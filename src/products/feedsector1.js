import React, { useState } from 'react';
import '../css/products.css';
import '../css/home.css';
import NavBar from '../NavBar'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { useTranslation } from 'react-i18next';
import Footer from '../home/footer'


const list = ['First crop sector', 'Second crop sector', 'Third crop sector'];

const chick = () => {
    const { t, i18n } = useTranslation();

    return (
        <div>
            <NavBar></NavBar>

            <div>
                <h2 className="title4">{t('Feedsec.1')}</h2>

                <div className="caro1">
                    <Carousel  >
                        <div >
                            <img src="/images/feedsec/3alaf bat.jpg"
                                
                            />

                        </div>
                        <div>
                            <img src="/images/feedsec/a3laf mwashy.jpg"
                                 />

                        </div>
                        <div>
                            <img src="/images/feedsec/a3laf.jpg"
                                 />

                        </div>
                    </Carousel>
                    <br></br>
                </div>
                <div lassName="choose">
                    <ul >
                        <a href="/ffeedsec">
                            <li className='title' >{t('Ffeedsec.1')}</li>
                        </a>
                        <br></br>
                        <a href="/sfeedsec">
                            <li className='title' >{t('Sfeedsec.1')}</li>
                        </a>
                        <br></br>
                        <a href="/Tfeedsec">
                            <li className='title' >{t('Tfeedsec.1')}</li>
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
export default chick;