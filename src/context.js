import React, { useState, useContext, useEffect } from "react";

const url = `https://botw-compendium.herokuapp.com/api/v2/all`;
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  // App load
  const [loading, setLoading] = useState(false);
  const [appData, setAppData] = useState([]);  
  // Creatures
  const [typeCreatures, setTypeCreatures] = useState('food');
  // Mobile Menu
  const [mobileMenu, setMobileMenu] = useState(false);
  const [isActive, setIsActive] = useState(false);
  // Search 
  const [showSearch, setShowSearch] = useState(true);
  const [isSearching, setIsSearching] = useState(false)



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

  return <AppContext.Provider value={{
    loading,
    appData,
    setTypeCreatures,
    typeCreatures,
    mobileMenu,
    setMobileMenu,
    isActive,
    setIsActive,
    showSearch,
    setShowSearch,
    isSearching,
    setIsSearching
  }}>{children}</AppContext.Provider>
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }