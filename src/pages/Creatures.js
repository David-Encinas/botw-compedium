import React from "react";

import Item from "../components/Item/Item";
import Loading from "../components/Loading/Loading";
import { useGlobalContext } from "../context";


const Creatures = () => {
  
  const {appData, loading, typeCreatures, setTypeCreatures} = useGlobalContext();
  const {creatures} = appData;
  if (loading) { return <Loading /> }
  if (!creatures || creatures === []) { return ( <p>Nothing here</p>)}
  const { food, non_food } = creatures;  
  
  let creaturesOptions = []
  Object.keys(creatures).forEach((opt) => {
    creaturesOptions.push(opt)
  })  

  const setPage = (e) => {
    e.preventDefault()      
    setTypeCreatures(e.target.innerHTML)
    
  }

  return (
    <section className="creatures-section section container">     
      <div className="toggle_buttons">
        {creaturesOptions.map((item, index)=> {                               
          return <button key={index} onClick={setPage}>{item}</button>
        })}
      </div>   

      <div className="flex-items">        

        {typeCreatures === 'food' && food.map((item, index)=> {                               
            return <Item item={item} key={index} />
        })}


        {typeCreatures === 'non_food' && non_food.map((item, index)=> {                               
          return <Item item={item} key={index} />
        })}
      </div>    
    </section>

  )
}

export default Creatures