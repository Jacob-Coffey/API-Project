import React from 'react';
import { Header } from './components/Header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { HomePage } from './components/HomePage';
import { Genres } from './components/Genres';
import {FavoritesPage} from './components/FavoritesPage';



function App() {
  return (
    <div className="App">
      <Router>
      <Header></Header>
        <Routes>
          <Route path='/favoritespage' element={<FavoritesPage />} />
          <Route path='/' element={<HomePage />} />
          <Route path='/genres' element={<Genres />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
