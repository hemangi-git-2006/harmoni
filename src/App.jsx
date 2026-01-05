// import { useState } from 'react'

// import './App.css'
// import { Routes, Route } from "react-router-dom";

// import CustomNavbar from "./component/Navbar";
// import Footer from "./component/Footer";

// import Home from "./pages/Home"
// import AboutUs from "./pages/AboutUs"
// import AuthPage from "./pages/AuthPage";
// import Instruments from "./pages/Instruments"
// import Lesson from "./pages/Lesson"
// import Quiz from "./pages/Quiz"




// function App() {


//   return (
//     <>

//       <CustomNavbar />
//       <Routes>
//          <Route path="/" element={<Home />} />
//         <Route path="/about" element={<AboutUs />} />
//           <Route path="/auth" element={<AuthPage />} />
//                <Route path="/instruments" element={<Instruments />} />
//           <Route path="/lesson" element={<Lesson />} />
//             <Route path="/quiz" element={<Quiz/>} />
                
//         {/* <Route path="/login" element={<Login />} />
//         <Route path="/register" element={<Register />} /> */}

//       </Routes>
//       <Footer/>

//     </>
//   )
// }

// export default App
import './App.css'
import { Routes, Route } from "react-router-dom";

import CustomNavbar from "./component/Navbar";
import Footer from "./component/Footer";

import Home from "./pages/Home"
import AboutUs from "./pages/AboutUs"
import Instruments from "./pages/Instruments"
import Lesson from "./pages/Lesson"
import Quiz from "./pages/Quiz"
import Login from "./pages/Login"
import Signup from "./pages/Signup"

import ProtectedRoute from "./ProtectedRoute.jsx";

function App() {
  return (
    <>
      <CustomNavbar />

      <Routes>
        {/* ✅ Public Route */}
        <Route path="/" element={<Home />} />

        {/* ✅ Auth Routes (Public) */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* 🔒 Protected Routes */}
        <Route
          path="/about"
          element={
            <ProtectedRoute>
              <AboutUs />
            </ProtectedRoute>
          }
        />

        <Route
          path="/instruments"
          element={
            <ProtectedRoute>
              <Instruments />
            </ProtectedRoute>
          }
        />

        <Route
          path="/lesson"
          element={
            <ProtectedRoute>
              <Lesson />
            </ProtectedRoute>
          }
        />

        <Route
          path="/quiz"
          element={
            <ProtectedRoute>
              <Quiz />
            </ProtectedRoute>
          }
        />
      </Routes>

      <Footer />
    </>
  )
}

export default App