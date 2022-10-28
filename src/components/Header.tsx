import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { MoviesContext } from "../context/MoviesContext";
import "../CSS/Header.css"

export const Header = () => {
    return (
        <div className="nav-bar">
        <h1>Groovy Movies</h1>
            <ul>
                <li><Link to={'/'}><button className="nav-btn" id="home">Home</button></Link></li>
                <li><Link to={'/genres'}><button className="nav-btn">Genres</button></Link></li>
                <li><Link to={'/top-rated'}><button className="nav-btn">Top Rated</button></Link></li>
                <li><Link to={'/search'}><button className="nav-btn">Search</button></Link></li>
                <li><Link to={'/favoritespage'}><button className="nav-btn">Favorites</button></Link></li>
            </ul>
        </div>
        
    )
}