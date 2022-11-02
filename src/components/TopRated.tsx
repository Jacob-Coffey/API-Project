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
                 const sucks = top.vote_average <= 6;
                 const average = 6 < top.vote_average && top.vote_average <= 7;
                 const great = top.vote_average > 7;
                return  <div className="top-rated" key={i}>
                        <h3 key={i}>{top.title}</h3>
                        <img src={imageSrc + top.poster_path} key={i}/><br></br>
                        {sucks && <span id="star">☆</span>}
                        {average && <><span id="star">☆</span><span id="star">☆</span></>}
                        {great && <><span id="star">☆</span><span id="star">☆</span><span id="star">☆</span></>}
                        <br></br>
                        <Link to={`/movieinfo/${top.id}`} key={i}><button>View More</button></Link>  
                        {!top.favorites ?
                    <button onClick={() => addMovie(top)}>Add to favorites</button> :
                    <button onClick={() => removeMovie(top.title)}>Remove from favorites</button>
                    } 
                        </div>
            })}
        </div>
     )
}
    