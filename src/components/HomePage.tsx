import { useContext } from "react";
import { MoviesContext } from "../context/MoviesContext";
import '../components/HomePage.css';

export const HomePage = () => {
    const { trendingMovies } = useContext(MoviesContext);

    console.log(trendingMovies.length)

   

    return (
        <div className="topFive-Container">
         {trendingMovies.map((movie) => {
            return <div className="topFive">
                <h3>{movie.title}</h3>
                <span>{movie.vote_average}</span>
                <img src={movie.poster_path}></img>
            </div>
         })}
        </div>
    )

}