document.addEventListener("DOMContentLoaded", function () {
    let form = document.getElementById("registro-form");
    let resultado = document.getElementById("resultado");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        let nombre = document.getElementById("nombre").value;
        let apellido = document.getElementById("apellido").value;
        let correo = document.getElementById("correo").value;
        let curso = document.getElementById("curso").value;

        let emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

        if (nombre === "" || apellido === "" || correo === "" || curso === "") {
            mostrarMensajeError("Por favor, complete todos los campos.");
        } else if (!emailRegex.test(correo)) {
            mostrarMensajeError("El correo electrónico no es válido.");
        } else {
            mostrarMensajeExito(nombre, apellido, correo, curso);
        }
    });

    function mostrarMensajeError(mensaje) {
        resultado.innerHTML = ""; // Limpiar cualquier resultado anterior
        let mensajeError = document.createElement("div");
        mensajeError.className = "error";
        mensajeError.textContent = mensaje;
        resultado.appendChild(mensajeError);
        resultado.style.display = "block";
    }

    function mostrarMensajeExito(nombre, apellido, correo, curso) {
        resultado.innerHTML = ""; // Limpiar cualquier resultado anterior
        let mensajeExito = document.createElement("div");
        mensajeExito.className = "exito";
        mensajeExito.innerHTML = `Registro exitoso:<br>Nombre: ${nombre}<br>Apellido: ${apellido}<br>Correo: ${correo}<br>Curso: ${curso}`;
        resultado.appendChild(mensajeExito);
        resultado.style.display = "block";
    }
});

