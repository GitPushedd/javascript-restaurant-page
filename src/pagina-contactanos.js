function dibujar(contenedor) {
  contenedor.innerHTML = "";

  const contenedorContacto = document.createElement("div");
  contenedorContacto.setAttribute("class", "contacto-div");

  const titulo = document.createElement("h2");
  titulo.textContent = "Nuestra ubicación";

  const direccion = document.createElement("p");
  direccion.textContent = "Calle Falsa 123, Ciudad Ejemplo";

  const telefono = document.createElement("p");
  telefono.textContent = "Teléfono: 123-456-7890";

  const horario = document.createElement("p");
  horario.textContent = "Horario: Lunes a Viernes, 9am - 5pm";

  const escribenos = document.createElement("p");
  escribenos.textContent = "Escríbenos";

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

  contenedorContacto.appendChild(titulo);
  contenedorContacto.appendChild(direccion);
  contenedorContacto.appendChild(telefono);
  contenedorContacto.appendChild(horario);
  contenedorContacto.appendChild(escribenos);
  contenedorContacto.appendChild(mapa);
  contenedor.appendChild(contenedorContacto);
}

export default dibujar;
