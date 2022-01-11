import React from "react";
import Style from "./MovieElement.module.scss";

function MovieElement(props) {
  const mouseEnterMovie = () => {
    props.updateSelectedMovie(props.movie.title);
  };

  return (
    <div
      onClick={mouseEnterMovie}
      className={"d-flex flex-row bg-light " + Style.container}
    >
      <img
        src={props.movie.img}
        alt="poster of the movie"
        height="200"
        width="150"
      />
      <div className="card-body flex-fill d-flex flex-column p-3">
        <h5 className="card-title list-group">{props.movie.title}</h5>
        <p className="card-text flex-fill">{props.movie.details}</p>
        <div className="d-flex flex-row justify-content-end">
          {props.isFavorite ? (
            <button
              className="btn btn-small btn-danger"
              onClick={() => {
                props.removeFavorite(props.movie.title);
              }}
            >
              Remove
            </button>
          ) : (
            <button
              className="btn btn-small btn-primary"
              onClick={() => {
                props.addFavorite(props.movie.title);
              }}
            >
              Add
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default MovieElement;
