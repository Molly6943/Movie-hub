import { Card, CardBody, Heading, HStack, Image } from '@chakra-ui/react'
import { Movie } from '../hooks/useMovies'
import CriticScore from './CriticScore'

import { useGetConfigurationQuery } from "src/store/slices/configuration";

interface Props {
  movie: Movie
}

const MovieCard = ({ movie }: Props) => {
  const { data: configuration } = useGetConfigurationQuery(undefined);
  return (
    <Card height="100%" cursor="pointer">
      <Image src={`${configuration?.images.base_url}w780${movie.backdrop_path ? movie.backdrop_path: ''}`} />
      <CardBody paddingX={0} paddingY={3}>
        <HStack padding={0} marginBottom={2}>
          <CriticScore score={movie.vote_average} />
        </HStack>
        <Heading fontSize='1xl'>{movie.original_title}</Heading>
      </CardBody>
    </Card>
  )
}

export default MovieCard