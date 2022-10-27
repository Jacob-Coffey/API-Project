import { useContext } from "react";
import { MoviesContext } from "../context/MoviesContext";
import { Link } from "react-router-dom";
import '../CSS/TopRated.css'
const imageSrc = 'https://image.tmdb.org/t/p/original/'

export const TopRated = () => {
    const { addMovie } = useContext(MoviesContext);
    const { topRated } = useContext(MoviesContext);

    return (
        <div className="top-rated-container">
            {topRated.map((top) => {
                return  <div className="top-rated">
                        <h3>{top.title}</h3>
                        <span>{top.vote_average}</span><br></br>
                        <img src={imageSrc + top.poster_path}/>
                        <Link to={`/movieinfo/${top.id}`}><button>View More</button></Link>  
                        <button onClick={() => addMovie(top)}>Add to Favorites</button>
                        </div>
            })}
        </div>
            )
}
    