import React from "react";

import { useGlobalContext } from "../../context";
import { NavLink } from 'react-router-dom';

import './Header.scss';

const Header = () => {

  const {appData, mobileMenu, setMobileMenu, setPageLocation} = useGlobalContext();    

  let headerLinksArray = [];
  Object.keys(appData).forEach((links) => {
    headerLinksArray.push(links)
  })

  const showMobileMenu = () => {
    setMobileMenu(!mobileMenu)
  }

  const linkClick = (e) => {
    setMobileMenu(false);
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
     setPageLocation(e.target.innerText)  
  
  }

  return (    
    <header>
      <div className="container">
        <h1>Hyrule Compendium API</h1>
        <button className={mobileMenu ? 'show mobile' : 'hide mobile'} onClick={showMobileMenu}></button>
        <ul className={mobileMenu ? 'show' : 'hide'}>          
          <li><NavLink to={`/botw-compendium/`} onClick={linkClick}>all</NavLink></li>
          {headerLinksArray.map((link,index) => {
            return <li key={index} ><NavLink to={`/botw-compendium/${link}`} onClick={linkClick} activeClassName="active">{link}</NavLink></li>
          })}
        </ul>        
      </div>
    </header>
  )
}

export default Header