import YouTube from "react-youtube";
import { MoviesGrid } from "./components/MoviesGrid";
import { MovieDetails } from "./pages/MovieDetails";
import { Home } from "./pages/Home";
import { ErrorPage } from "./pages/ErrorPage";
import styles from "./styles/App.module.css";
import { Link, BrowserRouter, Route, Routes } from "react-router-dom";

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
