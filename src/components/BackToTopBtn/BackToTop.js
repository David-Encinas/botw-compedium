import React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";

import './BackToTop.scss'

const BackToTop = () => {

  const backToTopClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })  
  }

  return (
    <div id="back-to-top">
      <button onClick={backToTopClick}><FontAwesomeIcon icon={faChevronUp} /></button>
    </div>
  )
}

export default BackToTop