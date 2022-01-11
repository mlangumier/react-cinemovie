import React, { useEffect, useState } from "react";
import { Header } from "./components";
import "./App.css";
import apiMovie, { apiMovieMap } from "./config/api.movie";
import apiFirebase from "./config/api.firebase";
import Films from "./features/films";
import Favorites from "./features/favorites";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

function App() {
  const [movies, setMovies] = useState(null);
  const [favorites, setFavorites] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(0);
  const [hasLoaded, setHasLoaded] = useState(false);

  // API movies + favorites

  useEffect(() => {
    apiMovie
      .get("/discover/movie")
      .then((res) => res.data.results)
      .then((moviesApi) => {
        const movies = moviesApi.map(apiMovieMap);
        updateMovies(movies);
      })
      .catch((err) => console.log(err));

    apiFirebase.get("favorites.json").then((res) => {
      let favorites = res.data ? res.data : [];
      console.log(favorites);
      updateFavorites(favorites);
    });
  }, []);

  // Films

  const updateMovies = (movies) => {
    setMovies(movies);
    setHasLoaded(favorites ? true : false);
  };

  const updateSelectedMovie = (index) => {
    setSelectedMovie(index);
  };

  // Update Favorites

  useEffect(() => {
    apiFirebase.put("favorites.json", favorites);
  }, [favorites]);

  const updateFavorites = (favorites) => {
    setHasLoaded(movies ? true : false);
    setFavorites(favorites);
  };

  // Favorites

  const addFavorite = (title) => {
    const favoritesList = [...favorites];
    const favorite = movies.find((movie) => movie.title === title);
    favoritesList.push(favorite);
    setFavorites(favoritesList);
  };

  const removeFavorite = (title) => {
    const favoritesList = [...favorites];
    const favoriteIndex = favoritesList.findIndex(
      (favorite) => favorite.title === title
    );
    favoritesList.splice(favoriteIndex, 1);
    setFavorites(favoritesList);
  };

  return (
    <Router>
      <Header />
      <div className="App d-flex flex-column">
        <Routes>
          <Route
            path="/films"
            element={
              <Films
                updateMovies={updateMovies}
                hasLoaded={hasLoaded}
                movies={movies}
                updateSelectedMovie={updateSelectedMovie}
                selectedMovie={selectedMovie}
                addFavorite={addFavorite}
                removeFavorite={removeFavorite}
                favorites={favorites}
              />
            }
          />
          <Route
            path="/favorites"
            element={
              <Favorites
                hasLoaded={hasLoaded}
                favorites={favorites}
                removeFavorite={removeFavorite}
              />
            }
          />
          <Route path="*" element={<Navigate to="/films" replace />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
