import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { MoviesContext } from "../context/MoviesContext";
import "../CSS/Header.css";
import { Genres } from "./Genres";

export const Header = () => {
    return (
        <div className="nav-bar">
        <h1>Groovy Movies</h1>
            <ul>
                <li><Link to={'/'}><button className="nav-btn" id="home">Home</button></Link></li>
                <li><Genres /></li>
                <li><Link to={'/top-rated'}><button className="nav-btn">Top Rated</button></Link></li>
                <li><Link to={'/favoritespage'}><button className="nav-btn">Favorites</button></Link></li>
            </ul>
        </div>
        
    )
}