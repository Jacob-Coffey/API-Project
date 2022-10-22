
import { ReactNode, useEffect, useState } from 'react';
import { Result } from '../models/MoviesInterface';
import { getMovies, getTrending } from '../services/APIpull';
import { MoviesContext } from './MoviesContext';

interface Props{ 
    children: ReactNode;
}

export const MoviesContextProvider = ({children}: Props) => {
    const [favoriteMovies, setFavoriteMovies] = useState<Result[]>([]);
    const [moviesList, setMoviesList] = useState<Result[]>([]);
    const [trendingMovies, setTrendingMovies] = useState<Result[]>([]);

    const addMovie = (newMovie: Result) => {
        const tempMovies = favoriteMovies.slice(0);

        tempMovies.push(newMovie);
        
        setFavoriteMovies(favoriteMovies);
    }

    const removeMovie = (title: string) => {
        const tempMovies = favoriteMovies.slice(0);
        let index = tempMovies.findIndex((element) => {
            element.title = title;
        })

        tempMovies.splice(index);

        setFavoriteMovies(tempMovies);
    }

    useEffect(() => {
        getMovies().then((response) => {
            setMoviesList(response);
        })
    }, []);

    useEffect(() => {
        getTrending().then((response) => {
            setTrendingMovies(response);
        })
    }, []);


    return <MoviesContext.Provider value={{ favoriteMovies, moviesList, addMovie, removeMovie, trendingMovies}}>{children}</MoviesContext.Provider>

}