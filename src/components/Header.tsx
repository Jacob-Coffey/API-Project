import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { MoviesContext } from "../context/MoviesContext";

export const Header = () => {
    const { genres } = useContext(MoviesContext);
    const dropdown = () => {
        document.getElementById('myDropdown')?.classList.toggle("show");
    }
    return (<>
        <h1>Grand Circus Movies</h1>
        <Link to={'/'}><button>Home</button></Link>
        <Link to={'/genres'}><button>Genres</button></Link>
        <Link to={'/top-rated'}><button>Top Rated</button></Link>
        <Link to={'/search'}><button>Search</button></Link>
        <Link to={'/favoritespage'}><button>Favorites</button></Link>
        </>
    )
}