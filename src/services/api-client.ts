import axios from "axios";
import { API_ENDPOINT_URL, VITE_APP_TMDB_V3_ACCESS_TOKEN } from "../constants";

export default axios.create({
  baseURL: API_ENDPOINT_URL,
  headers: {
    accept: 'application/json',
    Authorization: VITE_APP_TMDB_V3_ACCESS_TOKEN
  }
});
