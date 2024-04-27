import axios from "axios";
const TMDB_V3_API_KEY = import.meta.env.VITE_APP_TMDB_V3_API_KEY;
console.log('TMDB_V3_API_KEY', TMDB_V3_API_KEY)

export default axios.create({
  baseURL: 'https://api.themoviedb.org',
  headers: {
    accept: 'application/json',
    Authorization: TMDB_V3_API_KEY
  }
});
