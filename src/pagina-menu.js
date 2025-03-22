import sushiMenu1 from "./imgs/788.jpg";
import sushiMenu2 from "./imgs/790.jpg";
import sushiMenu3 from "./imgs/991.jpg";
import sushiMenu4 from "./imgs/1275.jpg";
import sushiMenu5 from "./imgs/1276.jpg";
import sushiMenu6 from "./imgs/1278.jpg";

function dibujar(contenedor) {
  contenedor.innerHTML = "";

  const contenedorPrincipal = document.createElement("div");
  contenedorPrincipal.setAttribute("class", "contenedor-principal-menu");

  const contenedorMenu = document.createElement("div");
  contenedorMenu.setAttribute("class", "contenedor-menu");

  const tituloMenu = document.createElement("h2");
  tituloMenu.textContent = "Menú";

  const contenedorSushi1 = document.createElement("div");
  contenedorSushi1.setAttribute("class", "contenedor-sushi");
  const contenedorTextoSushi1 = document.createElement("div");
  contenedorTextoSushi1.setAttribute("class", "contenedor-texto-sushi");
  const tituloSushi1 = document.createElement("h3");
  tituloSushi1.textContent = "Rollo maki con semillas de sésamo";
  const descripcionSushi1 = document.createElement("p");
  descripcionSushi1.textContent =
    "Fresco y crujiente rollo maki con pepino, realzado con el toque aromático de las semillas de sésamo. ";
  const precioSushi1 = document.createElement("p");
  precioSushi1.textContent = "$10.99";
  const imagenSushi1 = document.createElement("img");
  imagenSushi1.src = sushiMenu1;
  imagenSushi1.alt = "Sushi Roll Especial";
  imagenSushi1.setAttribute("width", "200px");

  contenedorTextoSushi1.appendChild(tituloSushi1);
  contenedorTextoSushi1.appendChild(descripcionSushi1);
  contenedorTextoSushi1.appendChild(precioSushi1);
  contenedorSushi1.appendChild(contenedorTextoSushi1);
  contenedorSushi1.appendChild(imagenSushi1);

  const contenedorSushi2 = document.createElement("div");
  contenedorSushi2.setAttribute("class", "contenedor-sushi");
  const contenedorTextoSushi2 = document.createElement("div");
  contenedorTextoSushi2.setAttribute("class", "contenedor-texto-sushi");
  const tituloSushi2 = document.createElement("h3");
  tituloSushi2.textContent = "Rollo maki con pepino";
  const descripcionSushi2 = document.createElement("p");
  descripcionSushi2.textContent =
    "Rollo maki con pepino, servido con salsa y semillas de sésamo. Fresco, crujiente y delicioso.";
  const precioSushi2 = document.createElement("p");
  precioSushi2.textContent = "$12.99";
  const imagenSushi2 = document.createElement("img");
  imagenSushi2.src = sushiMenu2;
  imagenSushi2.alt = "Sushi Roll Especial";
  imagenSushi2.setAttribute("width", "200px");

  contenedorTextoSushi2.appendChild(tituloSushi2);
  contenedorTextoSushi2.appendChild(descripcionSushi2);
  contenedorTextoSushi2.appendChild(precioSushi2);
  contenedorSushi2.appendChild(contenedorTextoSushi2);
  contenedorSushi2.appendChild(imagenSushi2);

  const contenedorSushi3 = document.createElement("div");
  contenedorSushi3.setAttribute("class", "contenedor-sushi");
  const contenedorTextoSushi3 = document.createElement("div");
  contenedorTextoSushi3.setAttribute("class", "contenedor-texto-sushi");
  const tituloSushi3 = document.createElement("h3");
  tituloSushi3.textContent = "Rollos de sushi con pepino y caviar tobiko";
  const descripcionSushi3 = document.createElement("p");
  descripcionSushi3.textContent =
    "Delicados rollos de sushi con pepino, combinados con el toque único y crujiente del caviar tobiko.";
  const precioSushi3 = document.createElement("p");
  precioSushi3.textContent = "$13.99";
  const imagenSushi3 = document.createElement("img");
  imagenSushi3.src = sushiMenu3;
  imagenSushi3.alt = "Sushi Roll Especial";
  imagenSushi3.setAttribute("width", "200px");

  contenedorTextoSushi3.appendChild(tituloSushi3);
  contenedorTextoSushi3.appendChild(descripcionSushi3);
  contenedorTextoSushi3.appendChild(precioSushi3);
  contenedorSushi3.appendChild(contenedorTextoSushi3);
  contenedorSushi3.appendChild(imagenSushi3);

  const contenedorSushi4 = document.createElement("div");
  contenedorSushi4.setAttribute("class", "contenedor-sushi");
  const contenedorTextoSushi4 = document.createElement("div");
  contenedorTextoSushi4.setAttribute("class", "contenedor-texto-sushi");
  const tituloSushi4 = document.createElement("h3");
  tituloSushi4.textContent = "Rollos de sushi, hot rolls y california rolls";
  const descripcionSushi4 = document.createElement("p");
  descripcionSushi4.textContent =
    "Una variedad irresistible de rollos de sushi, incluyendo los crujientes hot rolls y los clásicos California rolls.";
  const precioSushi4 = document.createElement("p");
  precioSushi4.textContent = "$8.99";
  const imagenSushi4 = document.createElement("img");
  imagenSushi4.src = sushiMenu4;
  imagenSushi4.alt = "Sushi Roll Especial";
  imagenSushi4.setAttribute("width", "200px");

  contenedorTextoSushi4.appendChild(tituloSushi4);
  contenedorTextoSushi4.appendChild(descripcionSushi4);
  contenedorTextoSushi4.appendChild(precioSushi4);
  contenedorSushi4.appendChild(contenedorTextoSushi4);
  contenedorSushi4.appendChild(imagenSushi4);

  const contenedorSushi5 = document.createElement("div");
  contenedorSushi5.setAttribute("class", "contenedor-sushi");
  const contenedorTextoSushi5 = document.createElement("div");
  contenedorTextoSushi5.setAttribute("class", "contenedor-texto-sushi");
  const tituloSushi5 = document.createElement("h3");
  tituloSushi5.textContent =
    "Rollos de sushi servidos con salsa y semillas de sésamo";
  const descripcionSushi5 = document.createElement("p");
  descripcionSushi5.textContent =
    "Exquisitos rollos de sushi, realzados con una deliciosa salsa y el toque crujiente de las semillas de sésamo.";
  const precioSushi5 = document.createElement("p");
  precioSushi5.textContent = "$12.99";
  const imagenSushi5 = document.createElement("img");
  imagenSushi5.src = sushiMenu5;
  imagenSushi5.alt = "Sushi Roll Especial";
  imagenSushi5.setAttribute("width", "200px");

  contenedorTextoSushi5.appendChild(tituloSushi5);
  contenedorTextoSushi5.appendChild(descripcionSushi5);
  contenedorTextoSushi5.appendChild(precioSushi5);
  contenedorSushi5.appendChild(contenedorTextoSushi5);
  contenedorSushi5.appendChild(imagenSushi5);

  const contenedorSushi6 = document.createElement("div");
  contenedorSushi6.setAttribute("class", "contenedor-sushi");
  const contenedorTextoSushi6 = document.createElement("div");
  contenedorTextoSushi6.setAttribute("class", "contenedor-texto-sushi");
  const tituloSushi6 = document.createElement("h3");
  tituloSushi6.textContent =
    "Rollos de sushi con semillas servidos con jengibre";
  const descripcionSushi6 = document.createElement("p");
  descripcionSushi6.textContent =
    "Deliciosos rollos de sushi cubiertos con semillas de sésamo, acompañados de jengibre encurtido para un toque fresco y aromático. ";
  const precioSushi6 = document.createElement("p");
  precioSushi6.textContent = "$10.99";
  const imagenSushi6 = document.createElement("img");
  imagenSushi6.src = sushiMenu6;
  imagenSushi6.alt = "Sushi Roll Especial";
  imagenSushi6.setAttribute("width", "200px");

  contenedorTextoSushi6.appendChild(tituloSushi6);
  contenedorTextoSushi6.appendChild(descripcionSushi6);
  contenedorTextoSushi6.appendChild(precioSushi6);
  contenedorSushi6.appendChild(contenedorTextoSushi6);
  contenedorSushi6.appendChild(imagenSushi6);

  contenedorPrincipal.appendChild(tituloMenu);
  contenedorMenu.appendChild(contenedorSushi1);
  contenedorMenu.appendChild(contenedorSushi2);
  contenedorMenu.appendChild(contenedorSushi3);
  contenedorMenu.appendChild(contenedorSushi4);
  contenedorMenu.appendChild(contenedorSushi5);
  contenedorMenu.appendChild(contenedorSushi6);

  contenedorPrincipal.appendChild(contenedorMenu);
  contenedor.appendChild(contenedorPrincipal);
}

export default dibujar;
