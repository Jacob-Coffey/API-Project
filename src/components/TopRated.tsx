import { useContext } from "react";
import { MoviesContext } from "../context/MoviesContext";
import { Link } from "react-router-dom";
import '../CSS/TopRated.css'
const imageSrc = 'https://image.tmdb.org/t/p/original/'

export const TopRated = () => {
    const { addMovie, topRated, removeMovie } = useContext(MoviesContext);
    

    return (
        <div className="top-rated-container">
            {topRated.map((top, i) => {
                return  <div className="top-rated" key={i}>
                        <h3 key={i}>{top.title}</h3>
                        <img src={imageSrc + top.poster_path} key={i}/><br></br>
                        {top.vote_average >= 6.5 && <div id="heart"></div>}{top.vote_average >= 7.5 && <div id="heart"></div>}{top.vote_average >= 8.5 && <div id="heart"></div>}<br></br>
                        <Link to={`/movieinfo/${top.id}`} key={i}><button>View More</button></Link>  
                        {!top.favorites ?
                    <button onClick={() => addMovie(top)} key={i}>Add to favorites</button> :
                    <button onClick={() => removeMovie(top.title)} key={i}>Remove from favorites</button>
                    } 
                        </div>
            })}
        </div>
     )
}
    