import React from 'react'
import './App.css'
import { Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import Contact from './pages/Contact'
import About from './pages/About'

//component
import Navbar from './Components/Navbar'


const App = () => {
  return (
  <>
        <Navbar/>
        
  <Routes>
   <Route path='/'element={<Home/>}/>
   <Route path='/about' element={<About/>}/>
   <Route path='/contact' element={<Contact/>}/>
  </Routes>
    
   
  </>
  )
}

export default App
