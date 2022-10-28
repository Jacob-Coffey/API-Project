import { useContext } from "react";
import { MoviesContext } from "../context/MoviesContext";
import '../components/FavoritesPage.css'

const imageSrc = 'https://image.tmdb.org/t/p/original/'


export const FavoritesPage = () => {
    const { favoriteMovies, moviesList, removeMovie } = useContext(MoviesContext);
    

    console.log(moviesList.length)

    console.log(favoriteMovies);

    return (
        <div className="favorite-Container">
            {favoriteMovies.length === 0 && <h2>You currently have no favorite movies!</h2>}
         {favoriteMovies.map((movie, i) => {
            return <div className="trending" key={i}>
                    <h3 key={i}>{movie.title}</h3>
                    <img src={imageSrc + movie.poster_path} key={i}></img><br></br>
                    {movie.vote_average >= 6.5 && <div id="heart"></div>}{movie.vote_average >= 7.5 && <div id="heart"></div>}{movie.vote_average >= 8.5 && <div id="heart"></div>}<br></br>
                    <button onClick={() => removeMovie(movie.title)} key={i}>Remove from Favorites</button>
                   </div>
         })}
        </div>
    )

}