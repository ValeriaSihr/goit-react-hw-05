import axios from "axios";

const API_TOKEN =
    "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNmM4ZTFmMWI1ZmU3ZDM4NjVhODQxYzAzNzNhNjMwNyIsInN1YiI6IjY2NjM1Y2VjZTE3NDllZmRiM2RkNDQ2NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.cfEwWSQBu6mCpKdgv6u0j4hCVEwxi_GTG_pF-NcA8kQ";

axios.defaults.baseURL = "https://api.themoviedb.org/3";
axios.defaults.headers.common["Authorization"] = `Bearer ${API_TOKEN}`;

export const fetchTrendingMovies = async () => {
    const response = await axios.get("/trending/movie/day");
    return response.data.results;
};

export const searchMovies = async (query) => {
    const response = await axios.get("/search/movie", {
        params: {
            query,
            language: "en-US",
            page: 1,
        },
    });
    return response.data.results;
};

export const fetchMovieDetails = async (movieId) => {
    const response = await axios.get(`/movie/${movieId}`);
    return response.data;
};

export const fetchMovieCredits = async (movieId) => {
    const response = await axios.get(`/movie/${movieId}/credits`);
    return response.data.cast;
};

export const fetchMovieReviews = async (movieId) => {
    const response = await axios.get(`/movie/${movieId}/reviews`);
    return response.data.results;
};
