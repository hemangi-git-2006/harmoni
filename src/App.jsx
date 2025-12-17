import { useState } from 'react'

import './App.css'
import { Routes, Route } from "react-router-dom";

import CustomNavbar from "./component/Navbar";
import Footer from "./component/Footer";

import Home from "./pages/Home"
import AboutUs from "./pages/AboutUs"
import AuthPage from "./pages/AuthPage";
import Instruments from "./pages/Instruments"
import Lesson from "./pages/Lesson"
import Quiz from "./pages/Quiz"




function App() {


  return (
    <>

      <CustomNavbar />
      <Routes>
         <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
          <Route path="/auth" element={<AuthPage />} />
               <Route path="/instruments" element={<Instruments />} />
          <Route path="/lesson" element={<Lesson />} />
            <Route path="/quiz" element={<Quiz/>} />
                
        {/* <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} /> */}

      </Routes>
      <Footer/>

    </>
  )
}

export default App
