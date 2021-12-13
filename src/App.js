import React, { Component } from "react";
import { Header, MovieList, MovieDetails, Loading } from "./components";
import "./App.css";
import dataMovies from "./data/data.movies";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: null,
      selectedMovie: 0,
      hasLoaded: false,
    };

    setTimeout(() => {
      this.setState({
        movies: dataMovies,
        hasLoaded: true,
      });
    }, 200);
  }

  updateSelectedMovie = (index) => {
    this.setState({
      selectedMovie: index,
    });
  };

  render() {
    return (
      <div className="App d-flex flex-column">
        <Header />
        {this.state.hasLoaded ? (
          <div className="d-flex fle-row flex-fill pt-4 container-fluid">
            <MovieList
              movies={this.state.movies}
              updateSelectedMovie={this.updateSelectedMovie}
            />
            <MovieDetails movie={this.state.movies[this.state.selectedMovie]} />
          </div>
        ) : (
          <Loading />
        )}
      </div>
    );
  }
}

export default App;
