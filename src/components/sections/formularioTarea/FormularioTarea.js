import { getTasksFromStorage, saveTasksToStorage } from "../../../storage/storage.js";

let FormularioTarea = (redireccionar, tareaEditar = null) => {
    let form = document.createElement("form");
    form.className = "formulario-tarea";

    let titulo = document.createElement("h3");
    titulo.textContent = tareaEditar ? "Editar Tarea" : "Nueva Tarea";
    form.appendChild(titulo);

    let divNombre = document.createElement("div");
    divNombre.className = "input-group-tarea";
    let inputNombre = document.createElement("input");
    inputNombre.type = "text";
    inputNombre.placeholder = "Nombre de la tarea";
    inputNombre.required = true;
    if (tareaEditar) inputNombre.value = tareaEditar.nombre;
    divNombre.appendChild(inputNombre);
    form.appendChild(divNombre);

    let divDesc = document.createElement("div");
    divDesc.className = "input-group-tarea";
    let inputDesc = document.createElement("input");
    inputDesc.type = "text";
    inputDesc.placeholder = "Descripción";
    inputDesc.required = true;
    if (tareaEditar) inputDesc.value = tareaEditar.descripcion;
    divDesc.appendChild(inputDesc);
    form.appendChild(divDesc);

    let divFecha = document.createElement("div");
    divFecha.className = "input-group-tarea";
    let inputFecha = document.createElement("input");
    inputFecha.type = "date";
    inputFecha.required = true;
    if (tareaEditar) inputFecha.value = tareaEditar.fecha;
    divFecha.appendChild(inputFecha);
    form.appendChild(divFecha);

    let divPrioridad = document.createElement("div");
    divPrioridad.className = "input-group-tarea";
    let selectPrioridad = document.createElement("select");
    
    let opciones = ["Alta", "Media", "Baja"];
    opciones.forEach(op => {
        let option = document.createElement("option");
        option.value = op;
        option.textContent = op;
        if (tareaEditar && tareaEditar.prioridad === op) option.selected = true;
        selectPrioridad.appendChild(option);
    });
    
    divPrioridad.appendChild(selectPrioridad);
    form.appendChild(divPrioridad);

    let button = document.createElement("button");
    button.type = "submit";
    button.className = "btn-crear-tarea";
    button.textContent = tareaEditar ? "Actualizar Tarea" : "Guardar Tarea";

    form.appendChild(button);

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        
        let taskList = getTasksFromStorage();

        if (tareaEditar) {
            let index = taskList.findIndex(t => 
                t.nombre === tareaEditar.nombre && 
                t.descripcion === tareaEditar.descripcion &&
                t.fecha === tareaEditar.fecha
            );

            if (index !== -1) {
                taskList[index].nombre = inputNombre.value;
                taskList[index].descripcion = inputDesc.value;
                taskList[index].fecha = inputFecha.value;
                taskList[index].prioridad = selectPrioridad.value;
            }
        } else {
            let nuevaTarea = {
                nombre: inputNombre.value,
                descripcion: inputDesc.value,
                fecha: inputFecha.value,
                prioridad: selectPrioridad.value,
                completada: false
            };
            taskList.push(nuevaTarea);
        }

        saveTasksToStorage(taskList);
        
        if(redireccionar) redireccionar();
    });

    return form;
}

export { FormularioTarea };