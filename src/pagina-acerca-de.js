import wavesimg from "./imgs/waves-acercade.png";

function dibujar(contenedor) {
  contenedor.innerHTML = "";
  const divPrincipal = document.createElement("div");
  divPrincipal.classList.add("principal");
  const divIzquierda = document.createElement("div");
  divIzquierda.classList.add("izquierda");
  const divDerecha = document.createElement("div");
  divDerecha.classList.add("derecha");

  const titulo = document.createElement("h2");
  titulo.textContent = "¿Quiénes somos?";
  const parrafo = document.createElement("p");
  parrafo.textContent =
    "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
  const imagen = document.createElement("img");
  imagen.src = wavesimg;

  const imagenwaves = document.createElement("img");
  imagenwaves.src = wavesimg;
  imagenwaves.classList.add("waves");
  imagenwaves.alt = "waves";

  divIzquierda.appendChild(titulo);
  divIzquierda.appendChild(parrafo);
  divDerecha.appendChild(imagen);
  divPrincipal.appendChild(divIzquierda);
  divPrincipal.appendChild(divDerecha);

  contenedor.appendChild(divPrincipal);
  contenedor.appendChild(imagenwaves);
}

export default dibujar;
