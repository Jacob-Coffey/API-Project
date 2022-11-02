import { useContext, useEffect, useState } from "react"
import { MoviesContext } from "../context/MoviesContext";
import { Link } from "react-router-dom";
import '../CSS/Genres.css'

export const Genres = () => {
    const { genres } = useContext(MoviesContext);

    return(
        <div className="dropdown">
            <button className='dropbtn'>Genres</button>
            <div className='dropdown-content'>
                {genres.map((genre, i) => {
                    return <Link to={`/genres/${genre.id}/${genre.name}`} key={i}><button className='genrebtn'>{genre.name}</button></Link>
                })}
            </div>
        </div>
    )
}
