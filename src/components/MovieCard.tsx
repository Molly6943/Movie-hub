import { Card, CardBody, Heading, HStack, Image, Text } from "@chakra-ui/react";
import { Movie } from "../hooks/useMovies";
import CriticScore from "./CriticScore";
import { FaRegCirclePlay } from "react-icons/fa6";

import { useGetConfigurationQuery } from "src/store/slices/configuration";
import styles from "./MovieCard.module.css";
import { Dispatch, SetStateAction, useState } from "react";
import apiClient from "src/services/api-client";
import { VideoResponse } from "src/types/Video";
import { CanceledError } from "axios";

interface Props {
  movie: Movie;
  onOpen: () => void;
  setVideos: Dispatch<SetStateAction<VideoResponse>>;
}

const MovieCard = ({ onOpen, movie, setVideos }: Props) => {
  const { data: configuration } = useGetConfigurationQuery(undefined);
  // const [videos, setVideos] = useState({} as VideoResponse)
  const [error, setError] = useState(null)
  const handleClick = () => {
    const controller = new AbortController();
    apiClient
      .get<VideoResponse>(`/movie/${movie.id}/videos`, { signal: controller.signal})
      .then((res) => {
        setVideos(res.data);
        onOpen()
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message)
      });
  }
  if (error) return <Text>{error}</Text>;
  return (
    <>
    <Card height="100%" cursor="pointer" className={styles.box}>
        <Image
          src={`${configuration?.images.base_url}w780${
            movie.backdrop_path ? movie.backdrop_path : ""
          }`}
        />
      <CardBody paddingX={2} paddingY={3}>
        <HStack padding={0} marginBottom={2}>
          <CriticScore score={movie.vote_average} />
        </HStack>
        <Heading fontSize="1xl">{movie.original_title}</Heading>
      </CardBody>
      <div className={styles.cover} onClick={handleClick}>
          <div className={styles.vertical}>
            <FaRegCirclePlay />
          </div>
        </div>
    </Card>
    </>
  );
};

export default MovieCard;
