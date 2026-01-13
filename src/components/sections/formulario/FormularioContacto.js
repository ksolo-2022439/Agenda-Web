export let FormularioContacto = (alEnviar) => {
    let formContainer = document.createElement("div");
    formContainer.className = "formulario-contacto";

    let form = document.createElement("form");
    form.className = "form-flex";

    let inputNombre = document.createElement("input");
    inputNombre.placeholder = "Nombre";
    inputNombre.required = true;
    
    let inputApellido = document.createElement("input");
    inputApellido.placeholder = "Apellido";
    inputApellido.required = true;

    let inputTel = document.createElement("input");
    inputTel.placeholder = "Teléfono";
    inputTel.type = "tel";
    inputTel.required = true;

    let btn = document.createElement("button");
    btn.textContent = "Confirmar y Guardar";
    btn.type = "submit";

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        alEnviar({
            nombre: `${inputNombre.value} ${inputApellido.value}`,
            telefono: inputTel.value
        });
        form.reset();
    });

    form.append(inputNombre, inputApellido, inputTel, btn);
    formContainer.appendChild(form);
    return formContainer;
};