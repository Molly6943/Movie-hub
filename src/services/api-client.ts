import axios from "axios";
const TMDB_V3_API_KEY = import.meta.env.VITE_APP_TMDB_V3_API_KEY;
import { endpoint } from "../constants";

export default axios.create({
  baseURL: endpoint,
  headers: {
    accept: 'application/json',
    Authorization: TMDB_V3_API_KEY
  }
});
