import landingImage from "./imgs/sushi-landing-page.png";
import moonImage from "./imgs/moon-background.png";

function dibujar(contenedor) {
  contenedor.innerHTML = ``;

  const contenedorPrincipal = document.createElement("div");
  contenedorPrincipal.setAttribute("class", "contenedor-inicio");

  const leftContainer = document.createElement("div");
  leftContainer.setAttribute("class", "left-container");
  const imageContainer = document.createElement("div");
  imageContainer.setAttribute("class", "image-container");

  const upperTitulo = document.createElement("h1");
  upperTitulo.textContent = "Bienvenido a Mitsuki 🍣✨";

  const titulo = document.createElement("p");
  titulo.textContent = "Donde cada bocado es una obra de arte";

  const subtitulo = document.createElement("p");
  subtitulo.textContent =
    "Sumérgete en la auténtica esencia de la gastronomía japonesa con cada rollo que preparamos. En Mitsuki, combinamos tradición y pasión en cada bocado, donde los sabores se unen para deleitar tus sentidos y transportarte al corazón de Japón.";

  const button = document.createElement("button");
  button.textContent = "Ordena ahora";

  const imagen = document.createElement("img");
  imagen.setAttribute("class", "imagen-landing");
  imagen.src = landingImage;
  imagen.alt = "Imagen de sushi";
  imagen.setAttribute("width", "400px");

  const moon = document.createElement("img");
  moon.setAttribute("class", "imagen-fondo");
  moon.src = moonImage;
  moon.alt = "Imagen de luna";
  moon.setAttribute("width", "400px");

  leftContainer.appendChild(upperTitulo);
  leftContainer.appendChild(titulo);
  leftContainer.appendChild(subtitulo);
  leftContainer.appendChild(button);
  imageContainer.appendChild(moon);
  imageContainer.appendChild(imagen);

  contenedorPrincipal.appendChild(leftContainer);
  contenedorPrincipal.appendChild(imageContainer);

  contenedor.appendChild(contenedorPrincipal);
}

export default dibujar;
