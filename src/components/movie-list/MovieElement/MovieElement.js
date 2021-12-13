import React, { Component } from "react";
import Style from "./MovieElement.module.scss";

export default class MovieElement extends Component {
  mouseEnterMovie = () => {
    this.props.updateSelectedMovie(this.props.movie.title);
  };

  render() {
    return (
      <div
        onMouseEnter={this.mouseEnterMovie}
        className={"d-flex flex-row bg-light " + Style.container}
      >
        <img
          src={this.props.movie.img}
          alt="poster of the movie"
          height="200"
          width="150"
        />
        <div className="card-body flex-fill d-flex flex-column p-3">
          <h5 className="card-title list-group">{this.props.movie.title}</h5>
          <p className="card-text">{this.props.movie.details}</p>
        </div>
      </div>
    );
  }
}
