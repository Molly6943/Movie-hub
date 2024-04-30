import withPagination from "src/hoc/withPagination";
import { MEDIA_TYPE } from "src/types/Common";
import { CustomGenre, Genre } from "src/types/Genre";
import MovieGird from "./MovieGird";
import { MovieQuery } from "src/App";

interface GridPageProps {
  movieQuery: MovieQuery;
  genre: Genre | CustomGenre;
  mediaType: MEDIA_TYPE;
}
export default function MovieGridWithInfiniteScroll({ movieQuery, genre, mediaType }: GridPageProps) {
  const Component = withPagination(
    MovieGird,
    mediaType,
    genre,
    movieQuery
  );
  return <Component />;
}
