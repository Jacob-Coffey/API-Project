import { useContext } from "react";
import { MoviesContext } from "../context/MoviesContext";
import '../CSS/HomePage.css';
import { Link } from "react-router-dom";

const imageSrc = 'https://image.tmdb.org/t/p/original/'

export const HomePage = () => {
    const { trendingMovies, moviesList } = useContext(MoviesContext);

    console.log(moviesList.length)

   

    return (
        <div className="trending-Container">
         {trendingMovies.map((movie) => {
            return <div className="trending">
                    <h3>{movie.title}</h3>
                    <span>{movie.vote_average}</span><br></br>
                    <img src={imageSrc + movie.poster_path}></img>
                   </div>
         })}
        </div>
    )

}