// Eventos con DOM - FORMULARIO
const section = document.querySelector(".inspiration-add");
const titulo = document.getElementById("titulo");
const guardarBtn = document.getElementById("guardarBtn");
const mensaje = document.getElementById("mensaje");

// Evento click: cambiar contenido del <h2> al hacer clic en el botón
guardarBtn.addEventListener("click", () => {
  titulo.textContent = "¡Inspiración guardada!";
  mensaje.textContent = "Has hecho clic en el botón Guardar.";
});

// Evento dbclick: agrandar el título al hacer doble clic
titulo.addEventListener("dblclick", () => {
  titulo.classList.toggle("agrandado");
  mensaje.textContent = "Has hecho doble clic en el título.";
});

// Evento mouse over: resaltar la sección cuando el ratón entra
section.addEventListener("mouseover", () => {
  section.classList.add("resaltado");
  mensaje.textContent = "El puntero está sobre la sección.";
});

// Evento mouse out: quitar el resaltado cuando el ratón sale
section.addEventListener("mouseout", () => {
  section.classList.remove("resaltado");
  mensaje.textContent = "El puntero salió de la sección.";
});

// Guardar datos en un objeto
function guardarDatos() {
  let objeto = {
    inspiration: document.getElementById("inspiration").value,
    description: document.getElementById("description").value
  }
  console.log(objeto);
}