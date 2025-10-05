document.addEventListener("DOMContentLoaded", () => {
  const imageContainers = document.querySelectorAll(".image-container");

  // Llamada a una API pública de imágenes (Picsum)
  fetch("https://picsum.photos/v2/list?page=1&limit=6")
    .then(response => response.json())
    .then(data => {
      // Rellenar cada contenedor con una imagen
      imageContainers.forEach((container, index) => {
        if (data[index]) {
          const img = document.createElement("img");
          img.src = data[index].download_url;
          img.alt = "Imagen de API";
          img.style.width = "100%";
          img.style.height = "auto";
          container.appendChild(img);
        }
      });

      // Inicializar Swiper una vez cargadas las imágenes
      new Swiper(".mySwiper", {
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        loop: true,
      });
    })
    .catch(error => console.error("Error al cargar imágenes:", error));
});
