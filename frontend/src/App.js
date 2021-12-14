import React from 'react';
import { Routes, BrowserRouter as Router, Route } from "react-router-dom";
import Register from './Pages/Register/Register';
import Login from './Pages/Login/Login';
import LandingPage from './Pages/LangingPage/LandingPage';
import Profile from './Pages/Profile/Profile';
import HomePage from './Pages/HomePage/HomePage';


export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/home-page" element={<HomePage/>} />
        <Route path="/profile" element={<Profile/>} />
      </Routes>
    </Router>

  )
}




