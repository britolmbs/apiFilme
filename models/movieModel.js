const fetch = require('node-fetch');

const API_KEY = process.env.API_KEY;
const API_URL = process.env.API_URL;
const LANGUAGE = process.env.LANGUAGE;

exports.fetchMovies = async (page = 1) => {
    const url = `${API_URL}/movie/popular?api_key=${API_KEY}&language=${LANGUAGE}&page=${page}`;
    const res = await fetch(url);
    return res.json();
};

exports.fetchMovieDetails = async (id) =>{
    const url = `${API_URL}/movie/${id}?api_key=${API_KEY}&language=${LANGUAGE}`;
    const res = await fetch(url);
    return res.json();
}