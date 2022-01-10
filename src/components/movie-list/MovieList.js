import React from "react";
import { MovieElement } from "..";

function MovieList(props) {
  return (
    <div className="w-75 d-flex flex-row flex-wrap align-content-start">
      {props.movies.map((m, index) => (
        <MovieElement
          key={m.title + index}
          movie={m}
          updateSelectedMovie={() => {
            props.updateSelectedMovie(index);
          }}
        />
      ))}
    </div>
  );
}

export default MovieList;
