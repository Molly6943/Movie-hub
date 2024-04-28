import { Card, CardBody, Heading, HStack, Image } from '@chakra-ui/react'
import { Movie } from '../hooks/useMovies'
// import getCroppedImageUrl from '../services/image-url'
import CriticScore from './CriticScore'
// import Emoji from './Emoji'
// import PlatformIconList from './PlatformIconList'
import { useGetConfigurationQuery } from "src/store/slices/configuration";
// import { API_ENDPOINT_URL } from '../constants'

interface Props {
  movie: Movie
}

const MovieCard = ({ movie }: Props) => {
  const { data: configuration } = useGetConfigurationQuery(undefined);
  return (
    <Card>
      <Image src={`${configuration?.images.base_url}w780${movie.backdrop_path}`} />
      <CardBody>
        <HStack justifyContent='space-between' marginBottom={3}>
          {/* <PlatformIconList platforms={movie.parent_platforms?.map(p => p.platform)} /> */}
          <CriticScore score={movie.vote_average} />
        </HStack>
        <Heading fontSize='1xl'>{movie.original_title}
        {/* <Emoji rating={movie.vote_count}/> */}
        </Heading>
      </CardBody>
    </Card>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export default MovieCard