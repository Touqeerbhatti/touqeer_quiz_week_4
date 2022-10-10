import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Exit_point from './Components/Exitpoint';
import Entery_point from './Components/Enterypoint';
import Home from './Components/Home';

function App() {
  return (
    <>
        <Home />
        <Routes>
          <Route path='/Enterypoint' element={<Entery_point/>} />
          <Route path='/Exitpoint' element={<Exit_point/>} />
        </Routes>
      
    </>
  );
}

export default App;
