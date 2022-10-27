import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Result } from "../models/MoviesInterface";
import { getMoviesByGenre } from "../services/APIpull";
import { Link } from "react-router-dom";
import '../CSS/MoviesByGenre.css';
import { MoviesContext } from "../context/MoviesContext";

const imageSrc = 'https://image.tmdb.org/t/p/original/';

export const MoviesByGenre = () => {
    const { addMovie } = useContext(MoviesContext);
    const [moviesList, setMoviesList] = useState<Result[]>([]);

    const id = useParams().id as string;

    useEffect(() => {
        getMoviesByGenre(id).then((response) => {
            setMoviesList(response);
        })
    }, []);
    
    
        return(
            <div className="by-genre-container">
                {moviesList.map((movie) => {
                    return <div className="by-genre">
                        <h2>{movie.title}</h2>
                        <span>{movie.vote_average}</span>
                        <img src={imageSrc + movie.poster_path}></img>
                        <Link to={`/movieinfo/${movie.id}`}><button>View More</button></Link>  
                        <button onClick={() => addMovie(movie)}>Add to Favorites</button>
                    </div>
                })}
            </div>
        )
}