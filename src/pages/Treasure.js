import React from "react";

import Loading from "../components/Loading/Loading";
import Item from "../components/Item/Item";
import { useGlobalContext } from "../context";

const Treasure = () => {
  const {appData, loading} = useGlobalContext();
  const { treasure } = appData;  

  if (loading) { return <Loading /> }
  if (!treasure || treasure === []) { return ( <p>Nothing here</p>)}


  return (
    <section className="treasure-section section container">        
    <div className="flex-items">        
      {treasure.map((item, index)=> {                               
        return <Item item={item} key={index} />
        })}

    </div>
  </section>

  )
}

export default Treasure