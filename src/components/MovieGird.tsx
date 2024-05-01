import { SimpleGrid, Text } from "@chakra-ui/react";
import { MovieQuery } from "../App";
import useMovies from "../hooks/useMovies";
import MovieCard from "./MovieCard";
import MovieCardContainer from "./MovieCardContainer";
import MovieCardSkeleton from "./MovieCardSkeleton";
import {useDisclosure} from '@chakra-ui/react'
import VideoModal from './VideoModal';
import { useState } from "react";
import { VideoResponse } from "src/types/Video";

interface Props {
  movieQuery: MovieQuery;
}

const MovieGrid = ({
  movieQuery,
 }: Props) => {

 const [videos, setVideos] = useState({} as VideoResponse)
 const { data, error, isLoading } = useMovies(movieQuery);
 const { isOpen, onOpen, onClose } = useDisclosure()

  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8];

  if (error) return <Text>{error}</Text>;

  return (
    <>
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
          <MovieCard onOpen={onOpen} setVideos={setVideos} movie={movie} />
        </MovieCardContainer>
      ))}
    </SimpleGrid>
    <VideoModal videos={videos}  isOpen={isOpen} onOpen={onOpen} onClose={onClose} />

    </>
  );
};

export default MovieGrid;
