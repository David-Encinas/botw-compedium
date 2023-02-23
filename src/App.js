import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
// import pages
import Home from './pages/Home'
import Creatures from './pages/Creatures'
import Equipment from './pages/Equipment'
import Materials from './pages/Materials'
import Monsters from './pages/Monsters'
import Treasure from './pages/Treasure'
import Error from './pages/Error'
// import components
import Header from './components/Header/Header.js'
import Loading from './components/Loading/Loading'
import Footer from './components/Footer/Footer'
import { useGlobalContext } from './context'



function App() { 
  const { loading } = useGlobalContext();

  if (loading) { return <Loading />}

  return (
    <Router>
      <Header />
      <Routes>
        {/* <Route exact path='/' element={<Home />} />       */}
        <Route path='/creatures' element={<Creatures />} />      
        <Route path='/equipment' element={<Equipment />} />      
        <Route path='/materials' element={<Materials />} />      
        <Route path='/monsters' element={<Monsters />} />      
        <Route path='/treasure' element={<Treasure />} />      
        <Route path='*' element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App