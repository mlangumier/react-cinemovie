import React from "react";
import { MovieElement } from "..";

function MovieList(props) {
  return (
    <div className="w-75 d-flex flex-row flex-wrap align-content-start">
      {props.movies.map((movie, index) => (
        <MovieElement
          key={movie.title + index}
          movie={movie}
          isFavorite={props.favorites.includes(movie.title)}
          addFavorite={props.addFavorite}
          removeFavorite={props.removeFavorite}
          updateSelectedMovie={() => {
            props.updateSelectedMovie(index);
          }}
        />
      ))}
    </div>
  );
}

export default MovieList;
