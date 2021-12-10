import React, { Component } from "react";
import { Header, MovieList, MovieDetails } from "./components";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [
        {
          title: "The Lord of the Rings: The Fellowship of the Ring",
          img: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcT9J7XACn3tlD6v4UXRMvT2wJN8FGCCPeh8U3RkZ6__tR4wGhSo",
          details: "2001 ‧ Fantasy/Adventure ‧ 2h 58m",
          description:
            "A young hobbit, Frodo, who has found the One Ring that belongs to the Dark Lord Sauron, begins his journey with eight companions to Mount Doom, the only place where it can be destroyed.",
        },
        {
          title: "Secret Window",
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUB4gKbfYQlBysWvXRlCpTOix4s3ZECQsjNpdgEsK8fi0-MH73",
          details: "2004 ‧ Thriller/Mystery ‧ 1h 36m",
          description:
            "A writer moves to his lakeside cabin to find solitude. However, a psychotic stalker blames him for plagiarising his work and refuses to leave him alone.",
        },
        {
          title: "I, Robot",
          img: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQSRSyz4-3OIg8TEpO0Pq9Y0BEAeJOANyJdIUXomxRb-xFHMt0v",
          details: "2004 ‧ Sci-fi/Action ‧ 1h 55m",
          description:
            "Del Spooner investigates the murder of Dr Alfred, who works at US Robotics, with the help of a robopsychologist. He tries to deduce if a robot has violated the laws of robotics and killed him.",
        },
        {
          title: "The Day After Tomorrow",
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZD_eENzj7Rxzne_SN0PUWqAuCMIR0hVAJmCMe5mCVuczq3kQn",
          details: "2004 ‧ Action/Sci-fi ‧ 2h 4m",
          description:
            "When a sudden worldwide storm begins to plunge the entire planet into a new ice age, paleoclimatologist Jack Hall undertakes a dangerous trek to New York City to save his son from the disaster.",
        },
      ],
      selectedMovie: 0,
    };
  }

  updateSelectedMovie = (title) => {
    const index = this.state.movies.findIndex((m) => {
      return title === m.title;
    });
    this.setState({
      selectedMovie: index,
    });
  };

  render() {
    return (
      <div className="App d-flex flex-column">
        <Header />
        <div className="d-flex fle-row flex-fill pt-4 container-fluid">
          <MovieList
            movies={this.state.movies}
            updateSelectedMovie={this.updateSelectedMovie}
          />
          <MovieDetails movie={this.state.movies[this.state.selectedMovie]} />
        </div>
      </div>
    );
  }
}

export default App;
