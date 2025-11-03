import React from 'react'
import './App.css'
import Navbar from './Component/Navbar'
import SearchPage from './Page/SearchPage'
import ResultPage from './Page/ResultPage'
import {BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {

  return (
    <>
     <Navbar/>
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<SearchPage/>}/>
      <Route path='/result' element={<ResultPage/>}/>
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
