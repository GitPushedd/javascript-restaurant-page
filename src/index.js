import "./styles.css"; //importamos el css en el punto de entrada
import dibujarPaginaInicio from "./pagina-inicio.js";

const contenedor = document.querySelector("#container");
const botonInicio = document.querySelector("#boton-inicio");

botonInicio.addEventListener("click", function () {
  dibujarPaginaInicio(contenedor);
});
