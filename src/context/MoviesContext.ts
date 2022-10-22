import { createContext } from "react";
import { Result } from "../models/MoviesInterface";

interface MoviesContextModel {
    favoriteMovies: Result[];
    addMovie: (newMovie: Result) => void;
    removeMovie: (id: string) => void;
    moviesList: Result[];
    trendingMovies: Result[];

}

const defaultValues: MoviesContextModel = {
    favoriteMovies: [],
    addMovie: () => {},
    removeMovie: () => {},
    moviesList: [],
    trendingMovies: [],

};

export const MoviesContext = createContext(defaultValues);