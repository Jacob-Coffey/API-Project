import React from 'react';
import { Header } from './components/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HomePage } from './components/HomePage';
import { Genres } from './components/Genres';


function App() {
  return (
    <div className="App">
      <Router>
      <Header></Header>
        <Routes>
          <Route path='/' element={<HomePage></HomePage>}></Route>
          <Route path='/genres' element={<Genres></Genres>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
