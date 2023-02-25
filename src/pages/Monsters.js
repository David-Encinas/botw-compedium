import React from "react";

import Loading from "../components/Loading/Loading";
import Item from "../components/Item/Item";

import { useGlobalContext } from "../context";


const Monsters = () => {
  const {appData, loading} = useGlobalContext();
  const {monsters} = appData;

  if (loading) { return <Loading /> }
  if (!monsters || monsters === []) { return ( <p>Nothing here</p>)}  

  return (
    <div className="flex-items">        
      {monsters.map((item, index)=> {                               
        return <Item item={item} key={index} />
        })}

    </div>
  )
}

export default Monsters