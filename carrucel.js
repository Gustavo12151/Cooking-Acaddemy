document.addEventListener("DOMContentLoaded", function () {
    const carruseles = document.querySelectorAll(".carrusel");

    carruseles.forEach(function (carrusel) {
        const frame = carrusel.querySelector(".carrusel-frame");
        const imagenes = frame.querySelectorAll("img");
        const prevButton = carrusel.querySelector(".prev");
        const nextButton = carrusel.querySelector(".next");
        let currentIndex = 0;

        nextButton.addEventListener("click", function () {
            currentIndex = (currentIndex + 1) % imagenes.length;
            actualizarImagen();
        });

        prevButton.addEventListener("click", function () {
            currentIndex = (currentIndex - 1 + imagenes.length) % imagenes.length;
            actualizarImagen();
        });

        function actualizarImagen() {
            imagenes.forEach(function (imagen, index) {
                imagen.style.display = index === currentIndex ? "block" : "none";
            });
        }
    });
});
