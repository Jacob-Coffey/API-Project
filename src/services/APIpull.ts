import axios from "axios";


export const getMovies = () => {
    return axios.get('https://api.themoviedb.org/3/discover/movie?api_key=7700a4662ffff4c1bb6fe7a6ef8d72f0', {
        params: {
            appid: process.env.REACT_APP_API_TOKEN,
            pages: 35530
        },
    });
};
