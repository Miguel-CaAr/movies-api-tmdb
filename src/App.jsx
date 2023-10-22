import YouTube from "react-youtube";
import { MoviesGrid } from "./components/MoviesGrid";
import { MovieDetails } from "./pages/MovieDetails";
import { Home } from "./pages/Home";
import { ErrorPage } from "./pages/ErrorPage";
import styles from "./styles/App.module.css";
import { Link, BrowserRouter, Route, Routes } from "react-router-dom";
/**
 * Funcion que se exporta al main para poder renderizar todo el contenido de la pagina,
 * aqui se usa la biblioteca"react-router-dom" para crear el paginado en single page application,
 * aqui se declaran las rutas y tambien la estructura de la pagina.
 * @returns retorna la estructura y los componentes para que se carguen al root.
 */
function App() {
  return (
    <>
      <BrowserRouter>
        <header>
          <Link to={"/"}>
            <h1 className={styles.title}>Movies</h1>
          </Link>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movie/:movieID" element={<MovieDetails />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </main>
      </BrowserRouter>
    </>
  );
}

export default App;
