import { useContext } from "react";
import { MoviesContext } from "../context/MoviesContext";
import '../components/HomePage.css';
import { Link } from "react-router-dom";

export const HomePage = () => {
    const { trendingMovies, moviesList } = useContext(MoviesContext);

    console.log(moviesList.length)

   

    return (
        <div className="trending-Container">
            <Link to={'/genres'}>Genres</Link>
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