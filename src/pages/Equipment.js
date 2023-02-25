import React from "react";

import Loading from '../components/Loading/Loading';
import Item from '../components/Item/Item';

import { useGlobalContext } from "../context";


const Equipment = () => {
  const {appData, loading} = useGlobalContext();
  const { equipment } = appData;  

  if (loading) { return <Loading /> }
  if (!equipment || equipment === []) { return ( <p>Nothing here</p>)}

  return (
      <div className="flex-items equipment-section">        
        {equipment.map((item, index)=> {                               
          return <Item item={item} key={index} />
          })}

      </div>

  )
}

export default Equipment