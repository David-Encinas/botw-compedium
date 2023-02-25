import React from "react";

import { useGlobalContext } from "../../context";
import { Link } from 'react-router-dom';

import './Header.scss';

const Header = () => {

  const {appData, mobileMenu, setMobileMenu, isActive, setIsActive} = useGlobalContext();    

  let headerLinksArray = [];
  Object.keys(appData).forEach((links) => {
    headerLinksArray.push(links)
  })

  const showMobileMenu = () => {
    setMobileMenu(!mobileMenu)
  }

  const linkClick = () => {
    setMobileMenu(false);
    setIsActive(false);    
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (    
    <header>
      <div className="container">
        <h1>Hyrule Compendium API</h1>
        <button className={mobileMenu ? 'show mobile' : 'hide mobile'} onClick={showMobileMenu}></button>
        <ul className={mobileMenu ? 'show' : 'hide'}>          
          <li className={isActive ? 'active' : ''}><Link to={`/botw-compendium/`} onClick={linkClick}>all</Link></li>
          {headerLinksArray.map((link,index) => {
            return <li key={index} className={isActive ? 'active' : ''}><Link to={`/botw-compendium/${link}`} onClick={linkClick}>{link}</Link></li>
          })}
        </ul>        
      </div>
    </header>
  )
}

export default Header