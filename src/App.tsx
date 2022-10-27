import React from 'react';
import { Header } from './components/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HomePage } from './components/HomePage';
import { Genres } from './components/Genres';
import { MovieInfo } from './components/MovieInfo';
// import { navigateToViewMore } from './';

function App() {

  return (
    <div className="App">
      <Router>
      <Header></Header>
        <Routes>
          <Route path='/' element={<HomePage></HomePage>}></Route>
          <Route path='/genres' element={<Genres></Genres>}></Route>
          {/* <Route path='/movieinfo' element={<MovieInfo></MovieInfo>}></Route> */}
        {/* <Route path='/genre' element={<viewButton></viewButton>}></Route> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
