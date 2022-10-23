import { useContext } from "react"
import { MoviesContext } from "../context/MoviesContext";
import { Link } from "react-router-dom";


export const Genres = () => {
    const { genres } = useContext(MoviesContext);

    return(
        <ul>
            {genres.map((genre, i) => {
                return <li><Link to={'/genres'} key={i}>{genre.name}</Link></li>
            })}
        </ul>
    )
}