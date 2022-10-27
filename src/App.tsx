import React from 'react';
import { Header } from './components/Header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { HomePage } from './components/HomePage';
import { Genres } from './components/Genres';

import {FavoritesPage} from './components/FavoritesPage';


import { TopRated } from './components/TopRated';
import { MoviesByGenre } from './components/MoviesByGenre';
import MovieInfo from './components/MovieInfo';



function App() {
  return (
    <div className="App">
      <Router>
      <Header></Header>
        <Routes>

          <Route path='/favoritespage' element={<FavoritesPage />} />

          <Route path='/' element={<HomePage></HomePage>}></Route>
          <Route path='/genres' element={<Genres></Genres>}></Route>
          <Route path='/top-rated' element={<TopRated></TopRated>}></Route>
          <Route path='/genres/:id' element={<MoviesByGenre></MoviesByGenre>}></Route>
          <Route path='/movieinfo/:id' element={<MovieInfo></MovieInfo>}></Route>
          <Route path='*' element={<HomePage></HomePage>}></Route>

        </Routes>
      </Router>
    </div>
  );
}

export default App;
