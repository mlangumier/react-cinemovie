import React from "react";

function MovieDetails(props) {
  return (
    <div className="w-25 p-4 d-flex flex-column bg-light h-100 sticky-top">
      <h5 className="text-center">{props.movie.title}</h5>
      <hr className="w-100" />
      <div>
        <img
          src={props.movie.img}
          alt="Poster from the movie"
          className="d-block mx-auto"
          height="300"
        />
      </div>
      <hr className="w-100" />
      <span className="text-secondary">{props.movie.details}</span>
      <hr className="w-100" />
      <p>{props.movie.description}</p>
    </div>
  );
}

export default MovieDetails;
