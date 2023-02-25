import React from "react";

import Loading from "../components/Loading/Loading";
import Item from "../components/Item/Item";
import SearchForm from "../components/Search/SearchForm";

import { useGlobalContext } from "../context";

const All = () => {
  const {appData, loading} = useGlobalContext();  
  const {creatures, equipment, materials, monsters, treasure} = appData;              
  
  if (loading) { return <Loading /> }
  if (!creatures || !equipment || !materials || !monsters || !treasure) { return ( <p>Nothing here</p>)}   
  let allData = [...creatures.food, ...creatures.non_food, ...equipment, ...materials, ...monsters, ...treasure]
  return (
    <>
    <SearchForm />
    <div className="flex-items">        
      {allData.map((item, index) => { return <Item key={index} item={item} /> })}
    </div>
    </>
  )
}

export default All