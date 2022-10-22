import React from 'react';
import { Header } from './components/Header';
import { Router, Routes, Route } from 'react-router-dom';
import { HomePage } from './components/HomePage';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <HomePage></HomePage>
    </div>
  );
}

export default App;
