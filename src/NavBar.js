import React from 'react';
import { Button, Navbar, Nav, NavDropdown, Form, FormControl, Image } from 'react-bootstrap'
import '../src/css/NavBar.css';
import { useTranslation } from 'react-i18next';
import ReactDOM from 'react-dom'
import { useState, useEffect } from 'react';
const NavBar = () => {

  const { t, i18n } = useTranslation();
  const rtlLanguages = ["ar"]
  const ltrLanguages = ["en"]
  const [dir, setDir] = useState('');
  // useEffect((lang) => {
  //   if (lang==='ar'){
  //     const dirction = ltrLanguages.includes(lang) ? "ltr" : "rtl"
  //     setDir(dirction)
  //     console.log("arabic "+dir)
  //   }
  //   else{
  //     const dirction = rtlLanguages.includes(lang) ? "rtl" : "ltr"
  //     setDir(dirction)
  //     console.log("english "+dir)
  //   }

  // });
  function handleClick(lang) {

    i18n.changeLanguage(lang);

  }

  


  return (

    <Navbar collapseOnSelect expand="lg" bg="light" variant="light" >
     <Navbar.Brand href="/">
    
    <img
      src="http://www.samyayedgroup.com/wp-content/uploads/2016/02/logo.png"
     width="170em"
     height="130em"
     className="d-inline-block align-top "
 
   /></Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="/" className="options">{t('Home.1')}</Nav.Link>
     
      <NavDropdown title={t('products.1')} id="basic-nav-dropdown" className="options1">
        <NavDropdown.Item href="/feedsector1" className="dropdown">{t('Feedsec.1')}</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="/chickensector" className="dropdown">{t('ChickenSec.1')}</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="/equipmentsector" className="dropdown">{t('EquipSec.1')}</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="cropsector" className="dropdown">{t('Cropsec.1')}</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="pharmacsector" className="dropdown">{t('Pharmasec.1')}</NavDropdown.Item>
        
      </NavDropdown>
      <Nav.Link href="/news" className="options">{t('News.1')}</Nav.Link>
      <Nav.Link href="/gallery" className="options">{t('Gallery.1')}</Nav.Link>
      <Nav.Link href="/videos" className="options">{t('Videos.1')}</Nav.Link>
      <Nav.Link href="/theforum"className="options">{t('Forum.1')}</Nav.Link>

      <NavDropdown title={t('Aboutus.1')} id="basic-nav-dropdown"className="options1" >
        <NavDropdown.Item href="/aboutus" className="dropdown" >{t('Aboutg.1')} </NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="/org" className="dropdown">{t('Org.1')} </NavDropdown.Item> 
      </NavDropdown>
     
      <NavDropdown title= {t('Contactus.1')} id="basic-nav-dropdown"  className="options1">
        <NavDropdown.Item href="/trial" className="dropdown">{t('Purchase.1')}</NavDropdown.Item>
      </NavDropdown>

      <NavDropdown title="&#x1F30E;" className={"lang"}className="options1" >
      
        <NavDropdown.Item onClick={()=>handleClick('ar') } className="dropdown1">
       
        <img
        src="/images/egypt.jpg"
        width="40em"
        height="30em"
        className="img3 "
      
      />
     
        </NavDropdown.Item>
        <NavDropdown.Item onClick={()=>handleClick('en')} className="dropdown1">
        <img
         src="/images/usa.PNG"
        width="40em"
        height="30em"
        className="img3 "
      
      />
     
        </NavDropdown.Item>
      </NavDropdown>
    </Nav>
   
         
    </Navbar.Collapse>
</Navbar>
 

);
}
 
export default NavBar;
