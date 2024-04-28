import { Card, CardBody, Heading, HStack, Image } from '@chakra-ui/react'
import { Movie } from '../hooks/useMovies'
import getCroppedImageUrl from '../services/image-url'
import CriticScore from './CriticScore'
// import Emoji from './Emoji'
// import PlatformIconList from './PlatformIconList'
import { endpoint } from '../constants'
interface Props {
  movie: Movie
}

const MovieCard = ({ movie }: Props) => {
  return (
    <Card>
      <Image src={getCroppedImageUrl(`${endpoint}${movie.poster_path}`)} />
      <CardBody>
        <HStack justifyContent='space-between' marginBottom={3}>
          {/* <PlatformIconList platforms={movie.parent_platforms?.map(p => p.platform)} /> */}
          <CriticScore score={movie.vote_average} />
        </HStack>
        <Heading fontSize='2xl'>{movie.original_title}
        {/* <Emoji rating={movie.vote_count}/> */}
        </Heading>
      </CardBody>
    </Card>
  )
}

export default MovieCard