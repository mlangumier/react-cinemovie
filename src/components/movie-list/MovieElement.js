import React, { Component } from "react";

export default class MovieElement extends Component {
  mouseEnterMovie = () => {
    this.props.updateSelectedMovie(this.props.movie.title);
  };

  render() {
    return (
      <div onMouseEnter={this.mouseEnterMovie} className="w-50 p-2">
        <div className="border d-flex">
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
      </div>
    );
  }
}
