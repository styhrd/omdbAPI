import { BrowserRouter } from "react-router-dom"
import { Route, Routes } from 'react-router-dom'
import Navbar from "./components/Navbar"

import Home from './pages/Home'
import Movies from './pages/Movies'
import Series from './pages/Series'
import { useState } from "react"

function App() {
  
  
  

  return (
    <>
      <Navbar/>
        <Routes >
                <Route path='/' element={<Home />}></Route>
                <Route path='/movies' element={<Movies />}></Route>
                <Route path='/series' element={<Series/>}></Route>
            </Routes>
       
      
    </>
  )
}

export default App
