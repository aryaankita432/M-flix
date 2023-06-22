import React from 'react'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Netflix from './pages/Netflix';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Player from './pages/Player';


const App = () => {
  return (
   <>
   <BrowserRouter>

   <Routes>
    <Route path="/" element={<Netflix/>} />
    <Route path="/login" element={<Login/>} />
    <Route path="/player" element={<Player/>}/>
    <Route path="/signup" element={<Signup/>} />
   </Routes>
   </BrowserRouter>
   </>
  )
}

export default App
