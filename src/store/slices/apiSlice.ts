import { API_ENDPOINT_URL, VITE_APP_TMDB_V3_ACCESS_TOKEN } from "src/constants";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const tmdbApi = createApi({
  reducerPath: "tmdbApi",
  baseQuery: fetchBaseQuery({
    baseUrl: API_ENDPOINT_URL,
    headers: {
      accept: "application/json",
      Authorization: VITE_APP_TMDB_V3_ACCESS_TOKEN,
    },
  }),
  endpoints: () => ({}),
});
