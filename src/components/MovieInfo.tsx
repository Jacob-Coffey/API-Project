import { useEffect, useContext } from "react"
import { useParams } from "react-router-dom";
import { useState } from "react";
import { Result } from "../models/MoviesInterface";
import { getMovieInfo } from "../services/APIpull";
import '../CSS/MovieInfo.css';
import { MoviesContext } from "../context/MoviesContext";

const posterImage = "https://image.tmdb.org/t/p/original/";



export const MovieInfo = () => {
    const { addMovie, removeMovie } = useContext(MoviesContext);
    const [movieOverview, setMovieOverview] = useState<Result[]>([]);

    const id = parseInt(useParams().id!);

    useEffect(() => {
        getMovieInfo(id).then((response) => {
            const tempOverview = movieOverview.slice(0);
            tempOverview.push(response);
            setMovieOverview(tempOverview);
        })
    }, []);

    return(
        <div className="movie-info">   
            {movieOverview.map((movie) => {
                const sucks = movie.vote_average <= 6;
                const average = 6 < movie.vote_average && movie.vote_average <= 7;
                const great = movie.vote_average > 7;
                return <div>
                    <h2>{movie.title}</h2>
                    <img className="movie-img" src={posterImage + movie.poster_path}></img><br></br>
                      {sucks && <span id="star">☆</span>}
                    {average && <><span id="star">☆</span><span id="star">☆</span></>}
                    {great && <><span id="star">☆</span><span id="star">☆</span><span id="star">☆</span></>}
                    <br></br>
                    <p>Release Date: {movie.release_date}</p>
                    <br></br>
                    <h2>Overview</h2>
                    <p>{movie.overview}</p>
                </div>
            
            })}
        </div>
    )
}


export default MovieInfo;