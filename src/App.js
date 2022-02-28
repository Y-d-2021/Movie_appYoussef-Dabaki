import { useState } from "react";
import "./App.css";
import Navigation from "./Components/Navigation";
import moviedata from "./Components/Data";
import MovieList from "./Components/MovieList";

function App() {
  const [movies, setMovies] = useState(moviedata);
  const [search, setSearch] = useState("");
  const [rating, setRating] = useState(0);
  return (
    <div className="App">
      <Navigation
        movies={movies}
        setMovies={setMovies}
        search={search}
        setSearch={setSearch}
        rating={rating}
        setRating={setRating}
      ></Navigation>

      <MovieList movies={movies} search={search} rating={rating} />
    </div>
  );
}

export default App;

