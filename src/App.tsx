import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.css';
import News from './components/Pages/News/News';
import Home from './components/Pages/Home/Home';

function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/apple" element={<News/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;