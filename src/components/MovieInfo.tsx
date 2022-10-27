import { useEffect } from "react"
import { useParams } from "react-router-dom";
import { useState } from "react";
import { Result } from "../models/MoviesInterface";
import { getMovieInfo } from "../services/APIpull";

const posterImage = "https://image.tmdb.org/t/p/original/";

interface Movies1{
    movies: Result;
}

export const MovieInfo = ({movies}: Movies1) => {
    const [movieOverview, setMovieOverview] = useState<Result[]>([]);

    const id = parseInt(useParams().id!);

    useEffect(() => {
        getMovieInfo(id).then((response) => {
            setMovieOverview(response);
        })
    }, []);

    return(
        <div className="movie-info">
            {movieOverview.map((movies) => {
                return <div>
                    <h2>Movie info</h2>
                    <h3>{movies.title}</h3>
                    <img src={posterImage + movies.poster_path}></img>
                    <p>IMDb: {movies.vote_average}</p>
                    <p>Release Date: {movies.release_date}</p>
                    <br></br>
                    <h5>Overview</h5>
                    <p>{movies.overview}</p>
                </div>
            })}
        </div>
    )
}
console.log(MovieInfo);

export default MovieInfo;
