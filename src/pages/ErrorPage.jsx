import { useRouteError } from "react-router-dom";

/**
 * Pagina que se utilizara como respuesta a una ruta no definida en el routes
 * En caso de la ruta especificada en la URL no sea una ruta valida.
 */
export function ErrorPage() {
  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
    </div>
  );
}
