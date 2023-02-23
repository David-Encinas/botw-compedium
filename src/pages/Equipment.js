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
    <section className="equipment-section section container">        
      <div className="flex-items">        
        {equipment.map((item, index)=> {                               
          return <Item item={item} key={index} />
          })}

      </div>
    </section>
  )
}

export default Equipment