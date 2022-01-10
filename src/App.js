import React, { useEffect, useState } from "react";
import {
  Header,
  MovieList,
  MovieDetails,
  Loading,
  SearchBar,
} from "./components";
import "./App.css";
import apiMovie, { apiMovieMap } from "./config/api.movie";

function App() {
  const [movies, setMovies] = useState(null);
  const [selectedMovie, setSelectedMovie] = useState(0);
  const [hasLoaded, setHasLoaded] = useState(false);

  const updateSelectedMovie = (index) => {
    setSelectedMovie(index);
  };

  useEffect(() => {
    apiMovie
      .get("/discover/movie")
      .then((res) => res.data.results)
      .then((moviesApi) => {
        const movies = moviesApi.map(apiMovieMap);
        updateMovies(movies);
      })
      .catch((err) => console.log(err));
  }, []);

  const updateMovies = (movies) => {
    setMovies(movies);
    setHasLoaded(true);
  };

  return (
    <div className="App d-flex flex-column">
      <Header />
      <SearchBar updateMovies={updateMovies} />
      {hasLoaded ? (
        <div className="d-flex fle-row flex-fill pt-4 container-fluid position-relative">
          <MovieList
            movies={movies}
            updateSelectedMovie={updateSelectedMovie}
          />
          <MovieDetails movie={movies[selectedMovie]} />
        </div>
      ) : (
        <Loading />
      )}
    </div>
  );
}

export default App;
