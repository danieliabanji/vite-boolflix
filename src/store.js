import { reactive } from "vue";
import axios from 'axios';



export const store = reactive({
    apiURL: 'https://api.themoviedb.org/3/',
    apiUrlMovie: "https://api.themoviedb.org/3/search/movie?",
    apiUrlSeries: "https://api.themoviedb.org/3/search/tv?",
    apiKey: '?api_key=405dc1ebabe7e93d4578208cae7973a4',
    urlImg: "https://image.tmdb.org/t/p/w200",

    filmList: [],
    tvList: [],
    loading: false,
    params: {},
    popular: false,
    film: false,
    serieTv: false,
    endPoint: '',
    errormessage: '',
    getFilms() {
        this.errormessage = ''
        // this.endPoint
        let endpoint = { ...this.endPoint };
        if (this.popular = true) {
            endpoint = 'movie/popular'
        }
        console.log(this.popular);
        // } else {
        //     this.endPoint = search/movie
        // }
        this.loading = true;
        const params = { ...this.params }
        console.log(params);
        axios.get(this.apiURL + endpoint + this.apiKey, { params }).then(
            (res) => {
                this.filmList = [...res.data.results];
                console.log(this.filmList);
                this.loading = false;
            }
        ).catch((error) => {
            this.filmList.length = 0
            this.loading = false;
            this.errormessage = error.message
            console.log(error);
        })
    },
    getTV() {
        this.errormessage = ''
        let endpoint = { ...this.endPoint };
        if (this.popular = true) {
            endpoint = 'tv/popular'
        }

        this.loading = true;
        const params = { ...this.params }
        axios.get(this.apiURL + endpoint + this.apiKey, { params }).then(
            (res) => {
                this.tvList = [...res.data.results];
                // console.log(this.tvList);
                this.loading = false;
            }
        ).catch((error) => {
            this.tvList.length = 0
            this.loading = false;
            this.errormessage = error.message
            console.log(error);
        })
    }

});