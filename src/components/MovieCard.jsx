import { useEffect } from "react";
import styles from "../styles/MovieCard.module.css";
import { Link, } from "react-router-dom";

export function MoviesCard({ movie }) {
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
