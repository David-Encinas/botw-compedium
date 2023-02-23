import React from "react";
import { useGlobalContext } from "../context";


const Home = () => {
  const {homePageData} = useGlobalContext();  
  return (
    <p>Home page</p>
  )
}

export default Home