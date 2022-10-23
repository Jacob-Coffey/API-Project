import { useContext } from "react"
import { MoviesContext } from "../context/MoviesContext"


export const Genres = () => {
    const { genres } = useContext(MoviesContext);

    return(
        <ul>
            {genres.map((genre, i) => {
                return <li key={i}>{genre.name}</li>
            })}
        </ul>
    )
}