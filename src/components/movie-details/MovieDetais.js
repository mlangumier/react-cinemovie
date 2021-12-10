import React, { Component } from "react";

export default class MovieDetails extends Component {
  render() {
    return (
      <div className="w-25 p-4 mx-2 border d-flex flex-column">
        <h5 className="text-center">{this.props.movie.title}</h5>
        <div>
          <img
            src={this.props.movie.img}
            alt="Poster from the movie"
            className="d-block mx-auto"
            height="300"
          />
        </div>
        <hr className="w-100" />
        <span className="text-secondary">{this.props.movie.details}</span>
        <hr className="w-100" />
        <p>{this.props.movie.description}</p>
      </div>
    );
  }
}
