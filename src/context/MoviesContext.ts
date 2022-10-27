import { createContext } from "react";
import { Genre, Result } from "../models/MoviesInterface";

interface MoviesContextModel {
    favoriteMovies: Result[];
    addMovie: (newMovie: Result) => void;
    removeMovie: (id: string) => void;
    moviesList: Result[];
    trendingMovies: Result[];
    genres: Genre[];
    topRated: Result[];

}

const defaultValues: MoviesContextModel = {
    favoriteMovies: [],
    addMovie: () => {},
    removeMovie: () => {},
    moviesList: [],
    trendingMovies: [],
    genres: [],
    topRated: [],

};

export const MoviesContext = createContext(defaultValues);