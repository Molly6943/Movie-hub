import { SimpleGrid, Text } from "@chakra-ui/react";
import { MovieQuery } from "../App";
import useMovies from "../hooks/useMovies";
import MovieCard from "./MovieCard";
import MovieCardContainer from "./MovieCardContainer";
import MovieCardSkeleton from "./MovieCardSkeleton";

interface Props {
  movieQuery: MovieQuery;
}

const MovieGrid = ({
  movieQuery,
 }: Props) => {

  const { data, error, isLoading } = useMovies(movieQuery);
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8];

  if (error) return <Text>{error}</Text>;


  return (
    <SimpleGrid
      columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
      padding="10px"
      spacing={6}
    >
      {isLoading &&
        skeletons.map((skeleton) => (
          <MovieCardContainer key={skeleton}>
            <MovieCardSkeleton />
          </MovieCardContainer>
        ))}
      {data.results?.map((movie) => (
        <MovieCardContainer key={movie.id}>
          <MovieCard movie={movie} />
        </MovieCardContainer>
      ))}
    </SimpleGrid>
  );
};

export default MovieGrid;
