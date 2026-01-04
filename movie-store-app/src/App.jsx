import { useState } from "react";
import MovieCard from "./components/MovieCard";

function App() {
  const display = true;
  return (
    <>
      {display ? (
        <MovieCard movie={{ title: "shay", release_date: "2024" }} />
      ) : (
        <MovieCard movie={{ title: "shay", release_date: "2020" }} />
      )}
    </>
  );
}

export default App;
