import React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from "@fortawesome/free-brands-svg-icons";

import './Footer.scss'

const Footer = () => {
  return (
    <footer>
      <p>Powered by <br></br><a href='https://gadhagod.github.io/Hyrule-Compendium-API/#/' target="_blank" rel="noreferrer">Hyrule Compendium API.</a></p>

      <p>Nerding out with React. David Encinas.</p>
      <p><a href='https://github.com/David-Encinas/botw-compedium' target='_blank' rel="noreferrer">See the code <FontAwesomeIcon icon={faGithub} /></a></p>
    </footer>
  )
}


export default Footer