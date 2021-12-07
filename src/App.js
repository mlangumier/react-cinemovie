import "./App.css";
import { Header, MovieList, MovieDetails } from "./components";

function App() {
  return (
    <div className="App d-flex flex-column">
      <Header />
      <div className="d-flex flew-row flex-fill pt-4 container-fluid">
        <MovieList />
        <MovieDetails />
      </div>
    </div>
  );
}

export default App;
