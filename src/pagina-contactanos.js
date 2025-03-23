function dibujar(contenedor) {
  contenedor.innerHTML = "";

  const contenedorContacto = document.createElement("div");
  contenedorContacto.setAttribute("class", "contenedor-contacto");

  const contenedorInterior = document.createElement("div");
  contenedorInterior.setAttribute("class", "contenedor-contacto-interno");

  const contenedorizquierdo = document.createElement("div");
  contenedorizquierdo.setAttribute("class", "contacto-div-izquierdo");

  const titulo = document.createElement("h2");
  titulo.textContent = "Nuestra ubicación";

  const direccion = document.createElement("p");
  direccion.textContent = "Cl. 14 Sur # 14-23, Bogotá, Colombia";

  const telefono = document.createElement("p");
  telefono.textContent = "Teléfono: 3182194645";

  const horario = document.createElement("p");
  horario.textContent = "Horario: Lunes a Viernes, 7am - 5pm";

  const escribenos = document.createElement("p");
  escribenos.textContent = "Escríbenos...";

  const mapa = document.createElement("iframe");
  mapa.setAttribute(
    "src",
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d935145.4799622062!2d-74.77193488002102!3d4.590073763759766!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f98e1003987bd%3A0xc1c38a35fe03bf87!2sUNAD%20Universidad%20Nacional%20Abierta%20y%20a%20Distancia%20-%20Sede%20Jos%C3%A9%20Celestino%20Mutis!5e0!3m2!1ses!2sco!4v1742485656788!5m2!1ses!2sco"
  );
  mapa.setAttribute("width", "400");
  mapa.setAttribute("height", "300");
  mapa.setAttribute("style", "border:0;");
  mapa.setAttribute("allowfullscreen", "");
  mapa.setAttribute("loading", "lazy");
  mapa.setAttribute("referrerpolicy", "no-referrer-when-downgrade");

  contenedorizquierdo.appendChild(titulo);
  contenedorizquierdo.appendChild(direccion);
  contenedorizquierdo.appendChild(telefono);
  contenedorizquierdo.appendChild(horario);
  contenedorizquierdo.appendChild(escribenos);
  contenedorInterior.appendChild(contenedorizquierdo);
  contenedorInterior.appendChild(mapa);
  contenedorContacto.appendChild(contenedorInterior);
  contenedor.appendChild(contenedorContacto);
}

export default dibujar;
