import { getTasksFromStorage, saveTasksToStorage } from "../../../storage/storage.js";

let FormularioTarea = (redireccionar) => {
    let form = document.createElement("form");
    form.className = "formulario-tarea";

    let titulo = document.createElement("h3");
    titulo.textContent = "Nueva Tarea";
    form.appendChild(titulo);

    let divNombre = document.createElement("div");
    divNombre.className = "input-group-tarea";
    let inputNombre = document.createElement("input");
    inputNombre.type = "text";
    inputNombre.placeholder = "Nombre de la tarea";
    inputNombre.required = true;
    divNombre.appendChild(inputNombre);
    form.appendChild(divNombre);

    let divDesc = document.createElement("div");
    divDesc.className = "input-group-tarea";
    let inputDesc = document.createElement("input");
    inputDesc.type = "text";
    inputDesc.placeholder = "Descripción";
    inputDesc.required = true;
    divDesc.appendChild(inputDesc);
    form.appendChild(divDesc);

    let divFecha = document.createElement("div");
    divFecha.className = "input-group-tarea";
    let inputFecha = document.createElement("input");
    inputFecha.type = "date";
    inputFecha.required = true;
    divFecha.appendChild(inputFecha);
    form.appendChild(divFecha);

    let button = document.createElement("button");
    button.type = "submit";
    button.className = "btn-crear-tarea";
    button.textContent = "Guardar Tarea";

    form.appendChild(button);

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        
        let nuevaTarea = {
            nombre: inputNombre.value,
            descripcion: inputDesc.value,
            fecha: inputFecha.value,
            completada: false
        };

        let taskList = getTasksFromStorage();
        taskList.push(nuevaTarea);
        saveTasksToStorage(taskList);
        
        if(redireccionar) redireccionar();
    });

    return form;
}

export { FormularioTarea };