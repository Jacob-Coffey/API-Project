import { useContext } from "react";
import { MoviesContext } from "../context/MoviesContext";
import '../CSS/HomePage.css';
import { Link } from "react-router-dom";

const imageSrc = 'https://image.tmdb.org/t/p/original/'


export const HomePage = () => {
    const { trendingMovies, moviesList, addMovie } = useContext(MoviesContext);

    return (
        <div className="trending-Container">

           <Link to={'/genres'}>Genres</Link>
            <Link to={'/favoritespage'}>Favorites</Link>
         {trendingMovies.map((movie) => {
            return <div className="trending">
                    <h3>{movie.title}</h3>
                    <span>{movie.vote_average}</span><br></br>
                    <img src={imageSrc + movie.poster_path}></img>
                    <Link to={`/movieinfo/${movie.id}`}><button>View More</button></Link>                     
                    <button onClick={() => addMovie(movie)}>Add to Favorites</button>
                   </div>
         })}
        </div>
    )

}