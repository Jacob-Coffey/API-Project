import { Link } from "react-router-dom";

export const Header = () => {
    return (<>
        <h1>Grand Circus Movies</h1>
        <button><Link to={'/'}>Home</Link></button>
        <button><Link to={'/genres'}>Genres</Link></button>
        <button><Link to={'/top-rated'}>Top Rated</Link></button>
        <button><Link to={'/search'}>Search</Link></button>
        </>
    )
}