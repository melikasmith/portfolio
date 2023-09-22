import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from './components/Home';


function App() {
  return (
      <>
        <h1>Melika Smith</h1>
        <Router>
          <Routes>
            <Route path="/" element={<Home/>}/>
          </Routes>
        </Router>
      </>
  );
}

export default App;
