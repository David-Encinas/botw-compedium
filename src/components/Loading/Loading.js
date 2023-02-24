import React from "react";

import './Loading.scss';

const Loading = () => {
  return (
    <div className="loading-container">
      <div className="loading">
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
      </div>
    </div>
  )
}

export default Loading