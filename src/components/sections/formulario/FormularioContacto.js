import { ContactList } from "../contactos/db.js";

let FormularioContacto = (redireccionar) => {
    let form = document.createElement("form");
    form.className = "formulario-contacto";

    let titulo = document.createElement("h3");
    titulo.textContent = "Nuevo Contacto";
    form.appendChild(titulo);

    let divNombre = document.createElement("div");
    divNombre.className = "input-group";
    let inputNombre = document.createElement("input");
    inputNombre.type = "text";
    inputNombre.placeholder = "Nombre";
    inputNombre.required = true;
    divNombre.appendChild(inputNombre);
    form.appendChild(divNombre);

    let divApellido = document.createElement("div");
    divApellido.className = "input-group";
    let inputApellido = document.createElement("input");
    inputApellido.type = "text";
    inputApellido.placeholder = "Apellido";
    inputApellido.required = true;
    divApellido.appendChild(inputApellido);
    form.appendChild(divApellido);

    let divTelefono = document.createElement("div");
    divTelefono.className = "input-group";
    let inputTelefono = document.createElement("input");
    inputTelefono.type = "tel";
    inputTelefono.placeholder = "Número de teléfono";
    inputTelefono.required = true;
    divTelefono.appendChild(inputTelefono);
    form.appendChild(divTelefono);

    let button = document.createElement("button");
    button.type = "submit";
    button.className = "btn-agregar";
    button.textContent = "Agregar Contacto";

    form.appendChild(button);

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        
        let nuevoContacto = {
            nombre: inputNombre.value,
            apellido: inputApellido.value,
            telefono: inputTelefono.value
        };

        ContactList.push(nuevoContacto);
        
        if(redireccionar) redireccionar();
    });

    return form;
}

export { FormularioContacto };