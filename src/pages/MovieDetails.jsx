import styles from "../styles/MovieCard.module.css";
import { MoviesCard } from "../components/MovieCard";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { get } from "../utils/HtppClient";

export function MovieDetails() {
  //useParams devuelve un OBJETO de pares clave:valor de los parametros dinamicos de la URL, en este aso es el /movie/movieID
  const { movieID } = useParams();
  //Almacena el json de la pelicula
  const [movie, setMovie] = useState(null);
  //Hace una solicitud con el "movieID" y luego guarda la promesa en "movies" del useState
  useEffect(() => {
    get(`/movie/${movieID}`).then((data) => {
      setMovie(data);
    });
  }, [movieID]);

  //Si movie no contiene un json, entonces retorna null.
  if (!movie) {
    return null;
  }

  const imageUrl = "https://image.tmdb.org/t/p/w300" + movie.poster_path;
  return <MoviesCard key={movie.id} movie={movie} />;
}
