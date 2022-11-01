import { useContext } from "react";
import { MoviesContext } from "../context/MoviesContext";
import '../CSS/FavoritesPage.css'

const imageSrc = 'https://image.tmdb.org/t/p/original/'


export const FavoritesPage = () => {
    const { favoriteMovies, moviesList, removeMovie } = useContext(MoviesContext);
    

    console.log(moviesList.length)

    console.log(favoriteMovies);

    return (
        <div className="favorite-Container">
            {favoriteMovies.length === 0 && <h2>You currently have no favorite movies!</h2>}
         {favoriteMovies.map((movie) => {
            return <div className="favorite-trending">
                <h3>{movie.title}</h3>
                <p></p>
                <img className="favorite-img" src={imageSrc + movie.poster_path}></img>
                <p></p>
                <span>{movie.vote_average}</span><p></p>
                <button className="favorites-btn" onClick={() => removeMovie(movie.title)}>Remove from Favorites</button>
                </div>
         })}
        </div>
    )

}