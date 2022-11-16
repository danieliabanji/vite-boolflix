import { reactive } from "vue";
import axios from 'axios';



export const store = reactive({

    apiMovieURL: "https://api.themoviedb.org/3/search/movie",
    apiTvURL: "https://api.themoviedb.org/3/search/tv",
    apiMoviePopularURL: 'https://api.themoviedb.org/3/movie/popular',
    apiTvPopularURL: 'https://api.themoviedb.org/3/tv/popular',
    apiKey: "405dc1ebabe7e93d4578208cae7973a4",
    searchKey: "",
    imgCard: "https://image.tmdb.org/t/p/w342",
    arrayMovie: [],
    arrayTv: [],
    loading: false,
    home: true,
    film: false,
    serieTv: false,














});




