
import { ReactNode, useEffect, useState } from 'react';
import { Genre, Result } from '../models/MoviesInterface';
import { getGenres, getMovies, getTopRated, getTrending } from '../services/APIpull';
import { MoviesContext } from './MoviesContext';

interface Props{ 
    children: ReactNode;
}

export const MoviesContextProvider = ({children}: Props) => {
    const [favoriteMovies, setFavoriteMovies] = useState<Result[]>([]);
    const [moviesList, setMoviesList] = useState<Result[]>([]);
    const [trendingMovies, setTrendingMovies] = useState<Result[]>([]);
    const [genres, setGenres] = useState<Genre[]>([]);
    const [topRated, setTopRated] = useState<Result[]>([]);

    

    const addMovie = (newMovie: Result) => {
        const tempMovies = favoriteMovies.slice(0);

        tempMovies.push(newMovie);
        
        setFavoriteMovies(tempMovies);
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

    useEffect(() => {
        getGenres().then((response) => {
            setGenres(response);
        })
    }, []);

    useEffect(() => {
        getTopRated().then((response) => {
            setTopRated(response);
        })
    }, []);


    return <MoviesContext.Provider value={{ favoriteMovies, moviesList, addMovie, removeMovie, trendingMovies, genres, topRated}}>{children}</MoviesContext.Provider>

}