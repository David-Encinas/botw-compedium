import React from "react";

import Loading from "../components/Loading/Loading";
import Item from "../components/Item/Item";
import { useGlobalContext } from "../context";


const Materials = () => {
  const {appData, loading} = useGlobalContext();
  const { materials } = appData;
  
  if (loading) { return <Loading /> }
  if (!materials || materials === {}) { return ( <p>Nothing here</p>)}
  
  return (
      <div className="flex-items">
        {materials.map((item, index) => {          
          return  <Item item={item} key={index}/>
        })}
      </div>
  )
}

export default Materials