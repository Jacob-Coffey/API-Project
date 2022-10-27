import axios from "axios";
import { MovieGenres, Movies, Result } from "../models/MoviesInterface";

export const getMovies = () => {
    return axios.get<Movies>(`https://api.themoviedb.org/3/discover/movie?api_key=7700a4662ffff4c1bb6fe7a6ef8d72f0`, {
        params: {
            page: 1
        },
    }).then((response) => {
        return response.data.results;
    })
    };



export const getTrending = () => {
    return axios.get<Movies>('https://api.themoviedb.org/3/trending/movie/day?api_key=7700a4662ffff4c1bb6fe7a6ef8d72f0', {
        params: {
            appid: process.env.REACT_APP_API_TOKEN,
            page: 1
        },
    }).then((response) => {
        return response.data.results
    })
};

export const getGenres = () => {
    return axios.get<MovieGenres>('https://api.themoviedb.org/3/genre/movie/list?api_key=7700a4662ffff4c1bb6fe7a6ef8d72f0', {
        params: {
            appid: process.env.REAVT_APP_API_TOKEN
        },  
    }).then((response) => {
        return response.data.genres
    })
};

export const getMovieInfo = (id: number) => {
    return axios.get<Movies>('https://api.themoviedb.org/3/movie/?api_key=7700a4662ffff4c1bb6fe7a6ef8d72f0', {

        params: {
            appid: process.env.REAVT_APP_API_TOKEN,
            movie_id: id
        },  
    }).then((response) => {
        return response.data.results;
    })
}
