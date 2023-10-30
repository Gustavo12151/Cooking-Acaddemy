document.addEventListener("DOMContentLoaded", function () {
    let form = document.getElementById("registro-form");
    let resultado = document.getElementById("resultado");
    let nombreInput = document.getElementById("nombre");
    let apellidoInput = document.getElementById("apellido");
    let correoInput = document.getElementById("correo");
    let cursoInput = document.getElementById("curso");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        let nombre = nombreInput.value;
        let apellido = apellidoInput.value;
        let correo = correoInput.value;
        let curso = cursoInput.value;

        let emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

        // Limpiar errores previos
        let errorElements = document.getElementsByClassName("error");
        for (let i = 0; i < errorElements.length; i++) {
            errorElements[i].textContent = "";
        }

        if (nombre === "") {
            document.getElementById("nombre-error").textContent = "Campo requerido";
        }
        if (apellido === "") {
            document.getElementById("apellido-error").textContent = "Campo requerido";
        }
        if (correo === "") {
            document.getElementById("correo-error").textContent = "Campo requerido";
        } else if (!emailRegex.test(correo)) {
            document.getElementById("correo-error").textContent = "El correo electrónico no es válido";
        }
        if (curso === "") {
            document.getElementById("curso-error").textContent = "Seleccione un curso";
        }

        if (nombre !== "" && apellido !== "" && correo !== "" && curso !== "" && emailRegex.test(correo)) {
            mostrarMensajeExito(nombre, apellido, correo, curso);
        }
    });

    function mostrarMensajeExito(nombre, apellido, correo, curso) {
        resultado.innerHTML = `Registro exitoso:<br>Nombre: ${nombre}<br>Apellido: ${apellido}<br>Correo: ${correo}<br>Curso: ${curso}`;
        // Limpiar campos y mensajes de error
        nombreInput.value = "";
        apellidoInput.value = "";
        correoInput.value = "";
        cursoInput.value = "";
        let errorElements = document.getElementsByClassName("error");
        for (let i = 0; i < errorElements.length; i++) {
            errorElements[i].textContent = "";
        }
    }
});



