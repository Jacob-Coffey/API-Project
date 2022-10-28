import { useContext, useState } from "react";
import { MoviesContext } from "../context/MoviesContext";
import '../CSS/HomePage.css';
import { Link } from "react-router-dom";

const imageSrc = 'https://image.tmdb.org/t/p/original/'


export const HomePage = () => {
    const { trendingMovies, addMovie, removeMovie } = useContext(MoviesContext);
    const round = (number: number, places: number, mode: number) => {
        let mult = parseInt("1" + "0".repeat(places));
        number = number * mult;
        if(mode === 1){number = Math.round(number)}
        return number / mult;
    };

    return (
        <div className="trending-Container">
         {trendingMovies.map((movie, i) => {
            return <div className="trending" key={i}>
                    <h3 key={i}>{movie.title}</h3>
                    <img src={imageSrc + movie.poster_path} key={i}></img><br></br>
                    {movie.vote_average >= 6.5 && <div id="heart"></div>}{movie.vote_average >= 7.5 && <div id="heart"></div>}{movie.vote_average >= 8.5 && <div id="heart"></div>}<br></br>
                    <Link to={`/movieinfo/${movie.id}`} key={i}><button>View More</button></Link> 
                    {!movie.favorites ?
                    <button onClick={() => addMovie(movie)} key={i}>Add to favorites</button> :
                    <button onClick={() => removeMovie(movie.title)} key={i}>Remove from favorites</button>
                    }  
                   </div>
         })}
        </div>
    )

}