// import { SimpleGrid } from "@chakra-ui/react";
// import { MovieQuery } from "../App";
// // import useMovies from "../hooks/useMovies";
// // import { Genre } from "../hooks/useGenres";
// import MovieCard from "./MovieCard";
// import MovieCardContainer from "./MovieCardContainer";
// // import MovieCardSkeleton from "./MovieCardSkeleton";
// import { PaginatedMovieResult } from "src/types/Common";
// import { Genre, CustomGenre } from "src/types/Genre";
// import { useEffect, useRef } from "react";
// import useIntersectionObserver from "src/hooks/useIntersectionObserver";

// interface Props {
//   movieQuery: MovieQuery;
//   genre: Genre | CustomGenre;
//   data: PaginatedMovieResult;
//   handleNext: (page: number) => void;
// }

// const MovieGrid = ({
//   data,
//   handleNext }: Props) => {

//   // const { data, error, isLoading } = useMovies(movieQuery);
//   // const skeletons = [1, 2, 3, 4, 5, 6];

//   // if (error) return <Text>{error}</Text>;
//   const intersectionRef = useRef<HTMLDivElement>(null);
//   const intersection = useIntersectionObserver(intersectionRef);

//   useEffect(() => {
//     if (
//       intersection &&
//       intersection.intersectionRatio === 1 &&
//       data.page < data.total_pages
//     ) {
//       handleNext(data.page + 1);
//     }
//   }, [intersection]);

//   return (
//     <SimpleGrid
//       columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
//       padding="10px"
//       spacing={6}
//     >
//       {/* {isLoading &&
//         skeletons.map((skeleton) => (
//           <MovieCardContainer key={skeleton}>
//             <MovieCardSkeleton />
//           </MovieCardContainer>
//         ))} */}
//       {data.results?.map((movie) => (
//         <MovieCardContainer key={movie.id}>
//           <MovieCard movie={movie} />
//         </MovieCardContainer>
//       ))}
//     </SimpleGrid>
//   );
// };

// export default MovieGrid;
