import img from "./imgs/acercade.jpg";

function dibujar(contenedor) {
  contenedor.innerHTML = "";

  const divPrincipal = document.createElement("div");
  divPrincipal.classList.add("contenedor-acercade");

  const divContenedor = document.createElement("div");
  divContenedor.classList.add("contenedor-acercade-interior");

  const divIzquierda = document.createElement("div");
  divIzquierda.classList.add("contenedor-acercade-izquierda");
  const divDerecha = document.createElement("div");
  divDerecha.classList.add("contenedor-acercade-derecha");

  //Div derecho
  const titulo = document.createElement("h2");
  titulo.textContent = "Nuestra Historia";
  const parrafo = document.createElement("p");
  parrafo.textContent =
    "Todo comenzó con una simple idea: crear un espacio donde la innovación y la creatividad se encuentren para transformar la experiencia digital. Desde nuestros primeros días, hemos trabajado incansablemente para diseñar soluciones únicas que conecten a las personas y hagan la tecnología más accesible para todos.";

  const mision = document.createElement("h2");
  mision.textContent = "Nuestra Misión";
  const parrafomision = document.createElement("p");
  parrafomision.textContent =
    "Crear experiencias digitales intuitivas y memorables, brindando herramientas que simplifiquen la vida de las personas. Creemos en la tecnología como un medio para conectar, inspirar y mejorar el mundo que nos rodea.";

  const nuestrosValores = document.createElement("h2");
  nuestrosValores.textContent = "Nuestros Valores";
  const listaValores = document.createElement("ul");
  const innovacionValor = document.createElement("li");
  innovacionValor.innerHTML =
    "<span>Innovación: </span> Siempre buscamos nuevas formas de hacer las cosas, desafiando los límites de la creatividad y la tecnología.";
  const transparenciaValor = document.createElement("li");
  transparenciaValor.innerHTML =
    "<span>Transparencia: </span> Valoramos la honestidad y la claridad en todas nuestras interacciones.";
  const compromisoValor = document.createElement("li");
  compromisoValor.innerHTML =
    "<span>Compromiso: </span> Nos dedicamos a cumplir nuestras promesas y superar las expectativas de nuestros clientes.";
  const experienciaValor = document.createElement("li");
  experienciaValor.innerHTML =
    "<span>Experiencia: </span> Nos esforzamos por ofrecer experiencias memorables y significativas a través de nuestros productos y servicios.";

  listaValores.appendChild(innovacionValor);
  listaValores.appendChild(transparenciaValor);
  listaValores.appendChild(compromisoValor);
  listaValores.appendChild(experienciaValor);
  //Div izquierdo
  const imagen = document.createElement("img");
  imagen.src = img;

  divIzquierda.appendChild(imagen);
  divDerecha.appendChild(titulo);
  divDerecha.appendChild(parrafo);
  divDerecha.appendChild(mision);
  divDerecha.appendChild(parrafomision);
  divDerecha.appendChild(nuestrosValores);
  divDerecha.appendChild(listaValores);
  divContenedor.appendChild(divIzquierda);
  divContenedor.appendChild(divDerecha);
  divPrincipal.appendChild(divContenedor);
  contenedor.appendChild(divPrincipal);
}

export default dibujar;
