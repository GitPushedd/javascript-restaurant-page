import sushiMenu1 from "./imgs/sushi-menu-1.png";
import sushiMenu2 from "./imgs/sushi-menu-2.png";
import sushiMenu3 from "./imgs/sushi-menu-3.png";
import sushiMenu4 from "./imgs/sushi-menu-4.png";
import sushiMenu5 from "./imgs/sushi-menu-5.png";
import sushiMenu6 from "./imgs/sushi-menu-6.png";

function dibujar(contenedor) {
  contenedor.innerHTML = "";

  const contenedorMenu = document.createElement("div");
  contenedorMenu.setAttribute("class", "contenedor-menu");

  const tituloMenu = document.createElement("h2");
  tituloMenu.textContent = "Menú";

  const contenedorSushi1 = document.createElement("div");
  contenedorSushi1.setAttribute("class", "contenedor-sushi");
  const tituloSushi1 = document.createElement("h3");
  tituloSushi1.textContent = "Sushi Roll Especial";
  const descripcionSushi1 = document.createElement("p");
  descripcionSushi1.textContent =
    "Deliciosos rollos de sushi con ingredientes frescos y sabores únicos.";
  const precioSushi1 = document.createElement("p");
  precioSushi1.textContent = "$12.99";
  const imagenSushi1 = document.createElement("img");
  imagenSushi1.src = sushiMenu1;
  imagenSushi1.alt = "Sushi Roll Especial";
  imagenSushi1.setAttribute("width", "200px");

  contenedorSushi1.appendChild(tituloSushi1);
  contenedorSushi1.appendChild(descripcionSushi1);
  contenedorSushi1.appendChild(precioSushi1);
  contenedorSushi1.appendChild(imagenSushi1);

  const contenedorSushi2 = document.createElement("div");
  contenedorSushi2.setAttribute("class", "contenedor-sushi");
  const tituloSushi2 = document.createElement("h3");
  tituloSushi2.textContent = "Sushi Roll Especial";
  const descripcionSushi2 = document.createElement("p");
  descripcionSushi2.textContent =
    "Deliciosos rollos de sushi con ingredientes frescos y sabores únicos.";
  const precioSushi2 = document.createElement("p");
  precioSushi2.textContent = "$12.99";
  const imagenSushi2 = document.createElement("img");
  imagenSushi2.src = sushiMenu2;
  imagenSushi2.alt = "Sushi Roll Especial";
  imagenSushi2.setAttribute("width", "200px");

  contenedorSushi2.appendChild(tituloSushi2);
  contenedorSushi2.appendChild(descripcionSushi2);
  contenedorSushi2.appendChild(precioSushi2);
  contenedorSushi2.appendChild(imagenSushi2);

  const contenedorSushi3 = document.createElement("div");
  contenedorSushi3.setAttribute("class", "contenedor-sushi");
  const tituloSushi3 = document.createElement("h3");
  tituloSushi3.textContent = "Sushi Roll Especial";
  const descripcionSushi3 = document.createElement("p");
  descripcionSushi3.textContent =
    "Deliciosos rollos de sushi con ingredientes frescos y sabores únicos.";
  const precioSushi3 = document.createElement("p");
  precioSushi3.textContent = "$12.99";
  const imagenSushi3 = document.createElement("img");
  imagenSushi3.src = sushiMenu3;
  imagenSushi3.alt = "Sushi Roll Especial";
  imagenSushi3.setAttribute("width", "200px");

  contenedorSushi3.appendChild(tituloSushi3);
  contenedorSushi3.appendChild(descripcionSushi3);
  contenedorSushi3.appendChild(precioSushi3);
  contenedorSushi3.appendChild(imagenSushi3);

  const contenedorSushi4 = document.createElement("div");
  contenedorSushi4.setAttribute("class", "contenedor-sushi");
  const tituloSushi4 = document.createElement("h3");
  tituloSushi4.textContent = "Sushi Roll Especial";
  const descripcionSushi4 = document.createElement("p");
  descripcionSushi4.textContent =
    "Deliciosos rollos de sushi con ingredientes frescos y sabores únicos.";
  const precioSushi4 = document.createElement("p");
  precioSushi4.textContent = "$12.99";
  const imagenSushi4 = document.createElement("img");
  imagenSushi4.src = sushiMenu4;
  imagenSushi4.alt = "Sushi Roll Especial";
  imagenSushi4.setAttribute("width", "200px");

  contenedorSushi4.appendChild(tituloSushi4);
  contenedorSushi4.appendChild(descripcionSushi4);
  contenedorSushi4.appendChild(precioSushi4);
  contenedorSushi4.appendChild(imagenSushi4);

  const contenedorSushi5 = document.createElement("div");
  contenedorSushi5.setAttribute("class", "contenedor-sushi");
  const tituloSushi5 = document.createElement("h3");
  tituloSushi5.textContent = "Sushi Roll Especial";
  const descripcionSushi5 = document.createElement("p");
  descripcionSushi5.textContent =
    "Deliciosos rollos de sushi con ingredientes frescos y sabores únicos.";
  const precioSushi5 = document.createElement("p");
  precioSushi5.textContent = "$12.99";
  const imagenSushi5 = document.createElement("img");
  imagenSushi5.src = sushiMenu5;
  imagenSushi5.alt = "Sushi Roll Especial";
  imagenSushi5.setAttribute("width", "200px");

  contenedorSushi5.appendChild(tituloSushi5);
  contenedorSushi5.appendChild(descripcionSushi5);
  contenedorSushi5.appendChild(precioSushi5);
  contenedorSushi5.appendChild(imagenSushi5);

  const contenedorSushi6 = document.createElement("div");
  contenedorSushi6.setAttribute("class", "contenedor-sushi");
  const tituloSushi6 = document.createElement("h3");
  tituloSushi6.textContent = "Sushi Roll Especial";
  const descripcionSushi6 = document.createElement("p");
  descripcionSushi6.textContent =
    "Deliciosos rollos de sushi con ingredientes frescos y sabores únicos.";
  const precioSushi6 = document.createElement("p");
  precioSushi6.textContent = "$12.99";
  const imagenSushi6 = document.createElement("img");
  imagenSushi6.src = sushiMenu6;
  imagenSushi6.alt = "Sushi Roll Especial";
  imagenSushi6.setAttribute("width", "200px");

  contenedorSushi6.appendChild(tituloSushi6);
  contenedorSushi6.appendChild(descripcionSushi6);
  contenedorSushi6.appendChild(precioSushi6);
  contenedorSushi6.appendChild(imagenSushi6);

  contenedorMenu.appendChild(tituloMenu);
  contenedorMenu.appendChild(contenedorSushi1);
  contenedorMenu.appendChild(contenedorSushi2);
  contenedorMenu.appendChild(contenedorSushi3);
  contenedorMenu.appendChild(contenedorSushi4);
  contenedorMenu.appendChild(contenedorSushi5);
  contenedorMenu.appendChild(contenedorSushi6);

  contenedor.appendChild(contenedorMenu);
}

export default dibujar;
