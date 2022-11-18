import { reactive } from "vue";
import axios from 'axios';



export const store = reactive({

    apiMovieURL: "https://api.themoviedb.org/3/search/movie",
    apiTvURL: "https://api.themoviedb.org/3/search/tv",
    apiMoviePopularURL: 'https://api.themoviedb.org/3/movie/popular',
    apiTvPopularURL: 'https://api.themoviedb.org/3/tv/popular',
    apiKey: "405dc1ebabe7e93d4578208cae7973a4",
    searchKey: "",
    imgCard: "https://image.tmdb.org/t/p/w300",
    imgbase: "https://image.tmdb.org/t/p",

    arrayMovie: [],
    arrayTv: [],
    loading: false,
    home: true,
    film: false,
    serieTv: false,
    page: true,




    filterSearch() {
        if (this.searchKey !== "") {
            // AXIOS PER MOVIE
            axios.get(this.apiMovieURL + `?api_key=${this.apiKey}&query=${this.searchKey}`)
                .then((resp) => {
                    this.arrayMovie.results = resp.data.results
                    console.log(this.arrayMovie, "film");
                })
            // AXIOS PER TV
            axios.get(this.apiTvURL + `?api_key=${this.apiKey}&query=${this.searchKey}`)
                .then((resp) => {
                    this.arrayTv.results = resp.data.results
                    console.log(this.arrayTv, "serie");
                })
        }
    },
    popularSearch() {
        // AXIOS PER MOVIE
        axios.get(this.apiMoviePopularURL + `?api_key=${this.apiKey}`)
            .then((resp) => {
                this.arrayMovie.results = resp.data.results;
                this.activeElement = this.arrayMovie.results[0];
                this.activeCard = this.arrayMovie.results[0].id;

                console.log(this.arrayMovie, "film");
            })
        // AXIOS PER TV
        axios.get(this.apiTvPopularURL + `?api_key=${this.apiKey}`)
            .then((resp) => {
                this.arrayTv.results = resp.data.results
                console.log(this.arrayTv, "serie");
            })
    },






});




