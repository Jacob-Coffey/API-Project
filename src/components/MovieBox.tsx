import React, { useState } from "react";
import { Result } from "../models/MoviesInterface";

const posterImage = "https://image.tmdb.org/t/p/original/";
interface Movies1{
    movies: Result;
}

export const MovieBox = ({movies}: Movies1) => {

    return(
        <div className="movie-info">
            <h3>{movies.title}</h3>
            <img src={posterImage + movies.poster_path}></img>
            <p>IMDb: {movies.vote_average}</p>
            <p>Release Date: {movies.release_date}</p>
            <br></br>
            <h5>Overview</h5>
            <p>{movies.overview}</p>

        </div>
    )
}

export default MovieBox;




    // const [show, setShow] = useState(false);

    // const handleShow=() => setShow(true);
    // const handleClose= () => setShow(false);


    //in div
    {/* <button type="button" className="btn-dark" onClick={handleShow}>View More</button> */}

    {/* <footer>
        <button type="button" onClick={handleClose}>Close</button>
    </footer> */}
