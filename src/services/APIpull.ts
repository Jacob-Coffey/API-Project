import axios from "axios";
import { Movies, Result } from "../models/MoviesInterface";


export const getMovies = () => {
    return axios.get<Movies>('https://api.themoviedb.org/3/discover/movie?api_key=7700a4662ffff4c1bb6fe7a6ef8d72f0', {
        params: {
            appid: process.env.REACT_APP_API_TOKEN,
            page: 10
        },
    }).then((response) => {
        return response.data.results
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
}
