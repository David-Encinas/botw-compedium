import React from "react";

import './Item.scss'

const Item = (props) => {
  let {item} = props;
  let {image, name, id, attack, defense, common_locations, category, description, cooking_effect, hearts_recovered, drops} = item;

  return <div className="item" id={id}>


  <div className="left-col">
    <div className="image">
      <img src={image} alt={name} loading='lazy' />
    </div>
  </div>

  <div className="right-col">
    <div className="title">
      <h3>{name}</h3>            
      <i>Category: <span>{category}</span></i>
    </div>
    <div className="info">       
      <div className="description">
        <p>{description}</p>
      </div>     
      <div>
        {attack ? <p><b>Attack:</b> <span>{attack}</span></p> : ' '}
        {defense ? <p><b>Defense:</b> <span>{defense}</span></p> : ''}
        {hearts_recovered ? <p><b>Hearts Recovered:</b> <span>{hearts_recovered}</span></p> : ''}
      </div> 

      {common_locations && common_locations.length > 0 ? <div className="common_locations">
        <h4>Common Locations: </h4>
        <ul>
          {common_locations.map((item, index)=> {return <li key={index}>{item}</li>})}              
        </ul> 
      </div>: ''}

      {drops && drops.length > 0 ? <div className="common_locations">
        <h4>Drops: </h4>
        <ul>
          {drops.map((item, index)=> {return <li key={index}>{item}</li>}) }              
        </ul> 
      </div> : ''}

      {cooking_effect ? <div className="cooking_effect">
        <h4>Cooking Effect: </h4>
        <ul>
          {cooking_effect}              
        </ul> 
      </div> : ''}

  </div>

  </div>

</div> 
}

export default Item