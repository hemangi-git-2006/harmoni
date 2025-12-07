import { useState } from 'react'

import './App.css'
import { Routes, Route } from "react-router-dom";

import CustomNavbar from "./component/Navbar";
import Footer from "./component/Footer";

import Home from "./pages/Home"
import AuthPage from "./pages/AuthPage";
import Instruments from "./pages/Instruments"
import Lesson from "./pages/Lesson"




function App() {


  return (
    <>

      <CustomNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/auth" element={<AuthPage />} />
               <Route path="/instruments" element={<Instruments />} />
          <Route path="/lesson" element={<Lesson />} />
                
        {/* <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} /> */}

      </Routes>
      <Footer/>

    </>
  )
}

export default App
