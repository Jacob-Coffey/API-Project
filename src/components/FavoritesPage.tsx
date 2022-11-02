import { useContext } from "react";
import { MoviesContext } from "../context/MoviesContext";
import { Link } from "react-router-dom";
import '../CSS/FavoritesPage.css'

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
                    {movie.title.length > 20 ? <h3>{movie.title.slice(0, 20) + '...'}</h3> : 
                        <h3>{movie.title}</h3>}
                    <img src={imageSrc + movie.poster_path} key={i}></img><br></br>
                    {sucks && <span id="star">☆</span>}
                    {average && <><span id="star">☆</span><span id="star">☆</span></>}
                    {great && <><span id="star">☆</span><span id="star">☆</span><span id="star">☆</span></>}
                    <br></br>
                    <Link to={`/movieinfo/${movie.id}`}><button>View More</button></Link> 
                    <button onClick={() => removeMovie(movie.title)} key={i}>Remove from favorites</button>
                    </div>
         })}
        </div>
    )

}