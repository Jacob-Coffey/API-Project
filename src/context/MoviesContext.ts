import { createContext } from "react";
import { Genre, MovieGenres, Result } from "../models/MoviesInterface";

interface MoviesContextModel {
    favoriteMovies: Result[];
    addMovie: (newMovie: Result) => void;
    removeMovie: (id: string) => void;
    moviesList: Result[];
    trendingMovies: Result[];
    genres: Genre[];

}

const defaultValues: MoviesContextModel = {
    favoriteMovies: [],
    addMovie: () => {},
    removeMovie: () => {},
    moviesList: [],
    trendingMovies: [],
    genres: [],

};

export const MoviesContext = createContext(defaultValues);