import landingImage from "./imgs/sushi-landing-page.png";

function dibujar(contenedor) {
  contenedor.innerHTML = ``;

  const leftContainer = document.createElement("div");
  const imageContainer = document.createElement("div");

  const titulo = document.createElement("h1");
  titulo.textContent =
    "Bienvenido a Mitsuki - Donde cada bocado es una obra de arte 🍣✨";

  const subtitulo = document.createElement("h2");
  subtitulo.textContent =
    "Sabor auténtico, tradición japonesa y frescura en cada rollo. 🍣🥢";

  const button = document.createElement("button");
  button.textContent = "Explora nuestro menú";

  const imagen = document.createElement("img");
  imagen.src = landingImage;
  imagen.alt = "Imagen de sushi";
  imagen.setAttribute("width", "400px");

  leftContainer.appendChild(titulo);
  leftContainer.appendChild(subtitulo);
  leftContainer.appendChild(button);
  imageContainer.appendChild(imagen);

  contenedor.appendChild(leftContainer);
  contenedor.appendChild(imageContainer);
}

export default dibujar;
