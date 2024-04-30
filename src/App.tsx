import { Grid, GridItem, Show, Box, Flex } from "@chakra-ui/react";
import { useState } from "react";
import MovieGrid from "./components/MovieGird";
import MovieHeading from "./components/MovieHeading";
// import PlatformSelector from "./components/PlatformSelector";
import SortSelector from "./components/SortSelector";
// import { MEDIA_TYPE } from "src/types/Common";

import GenreList from "./components/GenreList";
import NavBar from "./components/NavBar";
import { Genre } from "./hooks/useGenres";
// import MovieGridWithInfiniteScroll from "./components/MovieGridWithInfiniteScroll";

export interface MovieQuery { 
  genre: Genre;
  sort_by: string;
  keywords: string | null;
}

function App() {
  const [movieQuery, setmovieQuery] = useState<MovieQuery>({
    genre: {
      "id": 28,
      "name": "Action"
    },
    sort_by: 'popularity.desc'
  } as MovieQuery);
  
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: '1fr',
        lg: '250px 1fr'
      }}
    >
      <GridItem area="nav">
        <NavBar onSearch={(keywords) => setmovieQuery({ ...movieQuery, keywords })} />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          <GenreList selectedGenre={movieQuery.genre} onSelectGenre={(genre) => setmovieQuery({ ...movieQuery, genre})} />
        </GridItem>
      </Show>
      <GridItem area="main">
        <Box paddingLeft={2}>
          <MovieHeading movieQuery={movieQuery} />
          <Flex marginBottom={5}>
            <SortSelector sortOrder={movieQuery.sort_by} onSelectSortOrder={(sort_by) => setmovieQuery({ ...movieQuery, sort_by })} />
          </Flex>
        </Box>
        <MovieGrid movieQuery={movieQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;
