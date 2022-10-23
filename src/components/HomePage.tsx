import { useContext } from "react";
import { MoviesContext } from "../context/MoviesContext";
import '../components/HomePage.css';

export const HomePage = () => {
    const { trendingMovies, moviesList } = useContext(MoviesContext);

    console.log(moviesList.length)

   

    return (
        <div className="trending-Container">
         {trendingMovies.map((movie) => {
            return <div className="trending">
                <h3>{movie.title}</h3>
                <span>{movie.vote_average}</span>
                <img src={movie.poster_path}></img>
            </div>
         })}
        </div>
    )

}