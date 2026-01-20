import { getTasksFromStorage, saveTasksToStorage } from "../../../storage/storage.js";

let FormularioTarea = (redireccionar) => {
    let form = document.createElement("form");
    form.className = "formulario-tarea";

    let titulo = document.createElement("h3");
    titulo.textContent = "Nueva Tarea";
    form.appendChild(titulo);

    let divTitulo = document.createElement("div");
    divTitulo.className = "input-group-tarea";
    let inputTitulo = document.createElement("input");
    inputTitulo.type = "text";
    inputTitulo.placeholder = "Título de la tarea";
    inputTitulo.required = true;
    divTitulo.appendChild(inputTitulo);
    form.appendChild(divTitulo);

    let divDesc = document.createElement("div");
    divDesc.className = "input-group-tarea";
    let inputDesc = document.createElement("input");
    inputDesc.type = "text";
    inputDesc.placeholder = "Descripción";
    inputDesc.required = true;
    divDesc.appendChild(inputDesc);
    form.appendChild(divDesc);

    let button = document.createElement("button");
    button.type = "submit";
    button.className = "btn-crear-tarea";
    button.textContent = "Guardar Tarea";

    form.appendChild(button);

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        
        let nuevaTarea = {
            titulo: inputTitulo.value,
            descripcion: inputDesc.value,
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