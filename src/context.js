import React, { useState, useContext, useEffect } from "react";
import { useCallback } from "react";


const url = `https://botw-compendium.herokuapp.com/api/v2/all`;
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [appData, setAppData] = useState([]);  
  const [typeCreatures, setTypeCreatures] = useState('food');
  const [mobileMenu, setMobileMenu] = useState(false);
  const [isActive, setIsActive] = useState(false);


  const fetchBotw = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${url}`);
      const responseData = await response.json()
      if (responseData) { 
        setAppData(responseData.data);                
        setLoading(false)  
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchBotw()
  }, [])

  return <AppContext.Provider value={{loading, appData, setTypeCreatures, typeCreatures, mobileMenu, setMobileMenu, isActive, setIsActive}}>{children}</AppContext.Provider>
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }