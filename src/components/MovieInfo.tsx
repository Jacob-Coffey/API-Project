import { useEffect } from "react"
import { useParams } from "react-router-dom";
import { useState } from "react";
import { Result } from "../models/MoviesInterface";
import { getMovieInfo } from "../services/APIpull";
import '../CSS/MovieInfo.css';

const posterImage = "https://image.tmdb.org/t/p/original/";



export const MovieInfo = () => {
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
                return <div className="movie-container">
                    {/* <h2>Movie info</h2> */}
                    <h1 className="movie-title">{movie.title}</h1>
                    <img className="movie-img" src={posterImage + movie.poster_path}></img>
                    <p>IMDb: {movie.vote_average}</p>
                    <p>Release Date: {movie.release_date}</p>
                    {/* <br></br> */}
                    <p></p>
                    <h2>Overview</h2>
                    <p className="overview-description">{movie.overview}</p>
                </div>
            })}
        </div>
    )
}


export default MovieInfo;