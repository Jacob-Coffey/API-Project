import { useContext } from "react";
import { MoviesContext } from "../context/MoviesContext";
import '../components/HomePage.css';
// import '../CSS/HomePage.css';
import { Link } from "react-router-dom";

const imageSrc = 'https://image.tmdb.org/t/p/original/'

export const HomePage = () => {
    const { trendingMovies, moviesList } = useContext(MoviesContext);

    console.log(moviesList.length)

   

    return (
        <div className="trending-Container">
         {trendingMovies.map((movie) => {
            return <div className="trending">
                <h3>{movie.title}</h3>
                <span>{movie.vote_average}</span><br></br>
                <img src={imageSrc + movie.poster_path}></img>
                <Link to={`/movieinfo/${movie.id}`}><button>View More</button></Link> 
            </div>
         })}
        </div>
    )

}

// import { useContext } from "react";
// import { MoviesContext } from "../context/MoviesContext";
// import '../components/HomePage.css';
// import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom"; //TEST CODE

// const imageSrc = 'https://image.tmdb.org/t/p/original/';

// export const HomePage = () => {
//     const { trendingMovies, moviesList } = useContext(MoviesContext);

//     //TEST CODE START
//     // const navigate = useNavigate();

//     // const navigateToViewMore = () => {
//     //     navigate('/movieinfo/:id')
//     // }
//     //TEST CODE END



//     return (
//         <div className="trending-Container">
//             <Link to={'/genres'}>Genres</Link>
//          {trendingMovies.map((movie) => {
//             return <div className="trending">
//                 <h3>{movie.title}</h3>
//                 <span>{movie.vote_average}</span>
//                 <img src={imageSrc + movie.poster_path}></img>
                    
//                 {/* <Link to={`/movieinfo/${movie.id}`}><button onClick={navigateToViewMore}>View More</button></Link>  */}
//                 <Link to={`/movieinfo/${movie.id}`}><button>View More</button></Link> 
//             </div>
//          })}
//         </div>
//     )

// }