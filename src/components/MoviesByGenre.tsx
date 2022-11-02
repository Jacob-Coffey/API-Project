import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Result } from "../models/MoviesInterface";
import { getMoviesByGenre } from "../services/APIpull";
import { Link } from "react-router-dom";
import '../CSS/MoviesByGenre.css';
import { MoviesContext } from "../context/MoviesContext";

const imageSrc = 'https://image.tmdb.org/t/p/original/';

export const MoviesByGenre = () => {
    const { addMovie, removeMovie } = useContext(MoviesContext);
    const [moviesList, setMoviesList] = useState<Result[]>([]);

    const id = useParams().id as string;

    useEffect(() => {
        getMoviesByGenre(id).then((response) => {
            setMoviesList(response);
        })
    }, []);
    
    
        return(
            <div className="by-genre-container">
                {moviesList.map((movie, i) => {
                    return <div className="by-genre">
                        <h2>{movie.title}</h2>
                        <img src={imageSrc + movie.poster_path}></img><br></br>
                        {movie.vote_average >= 6.5 && <div id="heart"></div>}{movie.vote_average >= 7.5 && <div id="heart"></div>}{movie.vote_average >= 8.5 && <div id="heart"></div>}<br></br>
                        <Link to={`/movieinfo/${movie.id}`}><button>View More</button></Link>  
                        {!movie.favorites ?
                    <button onClick={() => addMovie(movie)} key={i}>Add to favorites</button> :
                    <button onClick={() => removeMovie(movie.title)} key={i}>Remove from favorites</button>
                    } 
                    </div>
                })}
            </div>
        )
}