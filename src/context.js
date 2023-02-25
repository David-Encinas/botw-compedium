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
  // Search 
  const [showSearch, setShowSearch] = useState(true);
  const [isSearching, setIsSearching] = useState(false)
  // Page Location
  const [pageLocation, setPageLocation] = useState();

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
    let windowLoc = window.location.pathname.split('/')[2];
    setPageLocation( windowLoc === '' ? 'All' : windowLoc)    
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
    showSearch,
    setShowSearch,
    isSearching,
    setIsSearching,
    pageLocation, setPageLocation
  }}>{children}</AppContext.Provider>
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }