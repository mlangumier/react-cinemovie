import React from "react";
import { MovieList, MovieDetails, SearchBar } from "./components";
import { Loading } from "../../components";

const Films = (props) => {
  return (
    <>
      <SearchBar updateMovies={props.updateMovies} />
      {props.hasLoaded ? (
        <div className="d-flex fle-row flex-fill pt-4 container-fluid position-relative">
          <MovieList
            movies={props.movies}
            updateSelectedMovie={props.updateSelectedMovie}
            favorites={props.favorites.map((favorite) => favorite.title)}
            addFavorite={props.addFavorite}
            removeFavorite={props.removeFavorite}
          />
          <MovieDetails movie={props.movies[props.selectedMovie]} />
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default Films;
