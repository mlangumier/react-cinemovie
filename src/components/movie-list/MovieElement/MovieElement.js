import React from "react";
import Style from "./MovieElement.module.scss";

// export default class MovieElement extends Component {

function MovieElement(props) {
  // console.log(props.movie.title);

  const mouseEnterMovie = () => {
    props.updateSelectedMovie(props.movie.title);
  };

  // render() {
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
        <p className="card-text">{props.movie.details}</p>
      </div>
    </div>
  );
  // }
}

export default MovieElement;
