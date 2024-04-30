import useData from "./useData";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}
export interface Genres {
  genres: Genre[]
}
const useGenres = () =>
  useData<Genres>(
    "/genre/movie/list",
    {
      params: {
        language:'en'
      },
    },
    []
  );

export default useGenres;
