import { MoviesCard } from "./MovieCard";
import styles from "../styles/MoviesGrid.module.css";
import { useEffect, useState } from "react";
import { get } from "../utils/HtppClient";

export function MoviesGrid() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    get("movie/upcoming")
      .then((data) => {
        setMovies(data.results);
      })
      .catch((err) => console.error(err));
  }, []);
  return (
    <ul className={styles.moviesGrid}>
      {movies.map((movie) => (
        <MoviesCard key={movie.id} movie={movie} />
      ))}
    </ul>
  );
}
