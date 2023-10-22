import { MoviesCard } from "./MovieCard";
import styles from "../styles/MoviesGrid.module.css";
import { useEffect, useState } from "react";
import { get } from "../utils/HtppClient";

/**
 * Componente que hace una solicitud a la api y obtiene las ultimas peliculas,
 * para mapearlas en un grid usando el componente <MoviesCard> mandando de argumento
 * cada movie y asignandole de key el id de la pelicula
 * @returns Ultimas peliculas en componentes <MoviesCard>
 */
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
