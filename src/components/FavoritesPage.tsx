import { useContext } from "react";
import { MoviesContext } from "../context/MoviesContext";
import '../components/FavoritesPage.css'

const imageSrc = 'https://image.tmdb.org/t/p/original/'


export const FavoritesPage = () => {
    const { favoriteMovies, removeMovie } = useContext(MoviesContext);

    return (
        <div className="favorite-container">
            {favoriteMovies.length === 0 && <><br></br>
            <h2>You currently have no favorite movies!</h2></>}
         {favoriteMovies.map((movie, i) => {
             const sucks = movie.vote_average <= 6;
             const average = 6 < movie.vote_average && movie.vote_average <= 7;
             const great = movie.vote_average > 7;
            return  <div className="favorite" key={i}>
                    <h3 key={i}>{movie.title}</h3>
                    <img src={imageSrc + movie.poster_path} key={i}></img><br></br>
                    {sucks && <span id="star">☆</span>}
                    {average && <><span id="star">☆</span><span id="star">☆</span></>}
                    {great && <><span id="star">☆</span><span id="star">☆</span><span id="star">☆</span></>}
                    <br></br>
                    <button onClick={() => removeMovie(movie.title)} key={i}>Remove from Favorites</button>
                    </div>
         })}
        </div>
    )

}