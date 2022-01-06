import React, { Component } from "react";
import {
  Header,
  MovieList,
  MovieDetails,
  Loading,
  SearchBar,
} from "./components";
import "./App.css";
import apiMovie, { apiMovieMap } from "./config/api.movie";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: null,
      selectedMovie: 0,
      loaded: false,
    };
  }

  updateSelectedMovie = (index) => {
    this.setState({
      selectedMovie: index,
    });
  };

  componentDidMount() {
    apiMovie
      .get("/discover/movie")
      .then((res) => res.data.results)
      .then((moviesApi) => {
        const movies = moviesApi.map(apiMovieMap);
        console.log(movies);
        this.updateMovies(movies);
      })
      .catch((err) => console.log(err));
  }

  updateMovies = (movies) => {
    this.setState({
      movies,
      loaded: true,
    });
  };

  render() {
    return (
      <div className="App d-flex flex-column">
        <Header />
        <SearchBar updateMovies={this.updateMovies} />
        {this.state.loaded ? (
          <div className="d-flex fle-row flex-fill pt-4 container-fluid position-relative">
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
