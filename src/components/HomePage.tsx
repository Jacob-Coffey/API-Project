import { useContext } from "react";
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
            <h2>Trending Movies</h2>
         {trendingMovies.map((movie, i) => {
            const sucks = movie.vote_average <= 6;
            const average = 6 < movie.vote_average && movie.vote_average <= 7;
            const great = movie.vote_average > 7;
            return <div className="trending" key={i}>
                    {movie.title.length > 20 ? <h3>{movie.title.slice(0, 20) + '...'}</h3> : 
                        <h3>{movie.title}</h3>}
                    <img src={imageSrc + movie.poster_path} key={i}></img><br></br>
                    {sucks && <span id="star">☆</span>}
                    {average && <><span id="star">☆</span><span id="star">☆</span></>}
                    {great && <><span id="star">☆</span><span id="star">☆</span><span id="star">☆</span></>}
                    <br></br>
                    <Link to={`/movieinfo/${movie.id}`}><button>View More</button></Link>
                    {!movie.favorites ?
                    <button onClick={() => addMovie(movie)}>Add to favorites</button> :
                    <button onClick={() => removeMovie(movie.title)}>Remove from favorites</button>
                    }  
                   </div>
         }) 
         }
        </div>
    )

}