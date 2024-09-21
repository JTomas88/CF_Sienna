import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { Navbar } from './front/js/component/Navbar/Navbar';
import { Jumbotron } from './front/js/component/Jumbotron/Jumbotron';
import { Registro } from './front/js/pages/Registro/Registro';

function App() {
  return (
    <BrowserRouter>
    <Navbar />
    <div className="App-content">
      <Routes>
        <Route path="/formularioRegistro" element={<Registro />} />
      </Routes>
    </div>
  </BrowserRouter>
  );
}

export default App;
