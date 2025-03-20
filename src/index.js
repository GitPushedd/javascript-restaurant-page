import "./styles.css"; //importamos el css en el punto de entrada
import dibujarInicio from "./pagina-inicio.js";
import dibujarMenu from "./pagina-menu.js";
import dibujarContactanos from "./pagina-contactanos.js";
import dibujarAcercaDe from "./pagina-acerca-de.js";

const contenedor = document.querySelector("#container");
const botonInicio = document.querySelector("#boton-inicio");
const botonMenu = document.querySelector("#boton-menu");
const botonContactanos = document.querySelector("#boton-contactanos");
const botonAcercaDe = document.querySelector("#boton-acercade");

botonInicio.addEventListener("click", function () {
  dibujarInicio(contenedor);
});

botonMenu.addEventListener("click", function () {
  dibujarMenu(contenedor);
});

botonContactanos.addEventListener("click", function () {
  dibujarContactanos(contenedor);
});

botonAcercaDe.addEventListener("click", function () {
  dibujarAcercaDe(contenedor);
});

document.addEventListener("DOMContentLoaded", function () {
  dibujarInicio(contenedor);
});
