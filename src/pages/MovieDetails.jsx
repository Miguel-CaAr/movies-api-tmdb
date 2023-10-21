import styles from "../styles/MovieCard.module.css";
import { MoviesCard } from "../components/MovieCard";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { get } from "../utils/HtppClient";

export function MovieDetails() {
  //useParams devuelve un OBJETO de pares clave:valor de los parametros dinamicos de la URL, en este aso es el /movie/movieID
  const { movieID } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    get(`/movie/${movieID}`).then((data) => {
      setMovie(data);
    });
  }, [movieID]);

  if (!movie) {
    return null;
  }

  const imageUrl = "https://image.tmdb.org/t/p/w300" + movie.poster_path;
  return <MoviesCard key={movie.id} movie={movie} />;
}
