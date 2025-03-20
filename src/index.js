import "./styles.css"; //importamos el css en el punto de entrada
import dibujarInicio from "./pagina-inicio.js";
import dibujarMenu from "./pagina-menu.js";
import dibujarContactanos from "./pagina-contactanos.js";

const contenedor = document.querySelector("#container");
const botonInicio = document.querySelector("#boton-inicio");
const botonMenu = document.querySelector("#boton-menu");
const botonContactanos = document.querySelector("#boton-contactanos");

botonInicio.addEventListener("click", function () {
  dibujarInicio(contenedor);
});

botonMenu.addEventListener("click", function () {
  dibujarMenu(contenedor);
});

botonContactanos.addEventListener("click", function () {
  dibujarContactanos(contenedor);
});

document.addEventListener("DOMContentLoaded", function () {
  dibujarInicio(contenedor);
});
