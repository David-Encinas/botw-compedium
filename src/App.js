import React from 'react'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
// import pages
import Creatures from './pages/Creatures'
import Equipment from './pages/Equipment'
import Materials from './pages/Materials'
import Monsters from './pages/Monsters'
import Treasure from './pages/Treasure'
import All from './pages/All'
import Error from './pages/Error'
// import components
import Header from './components/Header/Header.js'
import Loading from './components/Loading/Loading'
import BackToTop from './components/BackToTopBtn/BackToTop'
import Footer from './components/Footer/Footer'
import { useGlobalContext } from './context'



function App() { 
  const { loading } = useGlobalContext();

  if (loading) { return <Loading />}

  return (
    <Router>
      <Header />
      <section className="section container">           
        <Routes>        
          <Route path='/' element={<Navigate replate to='/botw-compendium/creatures'/>}/>       
          <Route path='botw-compendium/' element={<All />} />                  
          <Route path='botw-compendium/creatures' element={<Creatures />} />      
          <Route path='botw-compendium/equipment' element={<Equipment />} />      
          <Route path='botw-compendium/materials' element={<Materials />} />      
          <Route path='botw-compendium/monsters' element={<Monsters />} />      
          <Route path='botw-compendium/treasure' element={<Treasure />} />      
          <Route path='*' element={<Error />} />
        </Routes>        
      </section>
      <BackToTop />
      <Footer />
    </Router>
  )
}

export default App