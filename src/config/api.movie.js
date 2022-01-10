import * as axios from "axios";

const apiMovie = axios.create({
  baseURL: "https://api.themoviedb.org/4",
});

apiMovie.interceptors.request.use((req) => {
  req.headers["Authorization"] =
    "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiN2E5YzQ2ZjJjNzFjMWFlMzY0MDA2MjNlZDVkZGFhMCIsInN1YiI6IjYxZDVjMDFhYjAwNDBhMDA2NzFlNjE0NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ZrB1xtJPCtbBugV-BEK9WtS0aaJIdooTZ3ycGXKXa-I";
  return req;
});
export default apiMovie;

export const apiMovieMap = (movie) => ({
  img: movie.poster_path
    ? "https://image.tmdb.org/t/p/w500/" + movie.poster_path
    : "https://st4.depositphotos.com/14953852/24787/v/600/depositphotos_247872612-stock-illustration-no-image-available-icon-vector.jpg",
  title: movie.title,
  details:
    (movie.release_date ? `Released: ${movie.release_date}` : "N/A") +
    " | " +
    (movie.vote_average !== 0 && movie.vote_count !== 0
      ? `${movie.vote_average}/10 (${movie.vote_count} votes)`
      : "N/A"),
  description: movie.overview,
});
