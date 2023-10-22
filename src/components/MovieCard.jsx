import { useEffect } from "react";
import styles from "../styles/MovieCard.module.css";
import { Link } from "react-router-dom";

/**
 * Componente que construye una tarjeta con la pelicula y detalles
 * todo el componente es un link a mas detalles de la pelicula
 * @param {*} param Obtiene el json de la pelicula
 * @returns Tarjeta de la pelicula y detalles
 */
export function MoviesCard({ movie }) {
  //Se usa una constante para almacenar la url de la imagen y se concatena con el id del poster
  const imageUrl = "https://image.tmdb.org/t/p/w300" + movie.poster_path;

  return (
    <>
      <Link to={`/movie/${movie.id}`}>
        <li className={styles.movieCard}>
          <img
            width={230}
            height={345}
            className={styles.movieImage}
            src={imageUrl}
            alt={movie.title}
          />
          <p>{movie.overview}</p>
          <span>{movie.vote_average}</span>
        </li>
      </Link>
    </>
  );
}
