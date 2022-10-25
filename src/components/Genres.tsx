import { useContext, useEffect, useState } from "react"
import { MoviesContext } from "../context/MoviesContext";
import { Link } from "react-router-dom";
import '../CSS/Genres.css'

export const Genres = () => {
    const { genres } = useContext(MoviesContext);

    return(
        <div className="genres-container">
            {genres.map((genre, i) => {
                return <Link to={`/genres/${genre.id}`} key={i}><button>{genre.name}</button></Link>
            })}
        </div>
    )
}