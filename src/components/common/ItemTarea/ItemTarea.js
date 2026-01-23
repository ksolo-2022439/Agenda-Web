import { getTasksFromStorage, saveTasksToStorage } from "../../../storage/storage.js";

let ItemTarea = (tarea, recargarLista, onEdit) => { 
    let div = document.createElement("div");
    div.className = "item-tarea";

    if (tarea.completada) {
        div.classList.add("completada");
    }

    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.className = "checkbox-tarea";
    checkbox.checked = tarea.completada;

    let divContenido = document.createElement("div");
    divContenido.className = "contenido-tarea";

    let divInfo = document.createElement("div");
    divInfo.className = "info-tarea";

    let headerInfo = document.createElement("div");
    headerInfo.className = "header-info-tarea";

    let etiquetaNombre = document.createElement("h4");
    etiquetaNombre.textContent = tarea.nombre;

    let badgePrioridad = document.createElement("span");
    badgePrioridad.className = `badge-prioridad ${tarea.prioridad.toLowerCase()}`;
    badgePrioridad.textContent = tarea.prioridad;

    headerInfo.appendChild(etiquetaNombre);
    headerInfo.appendChild(badgePrioridad);

    let etiquetaDesc = document.createElement("p");
    etiquetaDesc.textContent = tarea.descripcion;
    
    let etiquetaFecha = document.createElement("span");
    etiquetaFecha.className = "fecha-tarea";
    etiquetaFecha.textContent = `Fecha: ${tarea.fecha}`;

    divInfo.appendChild(headerInfo);
    divInfo.appendChild(etiquetaDesc);
    divInfo.appendChild(etiquetaFecha);

    divContenido.appendChild(divInfo);

    let accionesDiv = document.createElement("div");
    accionesDiv.className = "acciones-tarea";

    let btnEditar = document.createElement("button");
    btnEditar.className = "btn-editar-tarea";
    let imgEditar = document.createElement("img");
    imgEditar.src = "./assets/icons/edit.svg"; 
    btnEditar.appendChild(imgEditar);

    let btnBorrar = document.createElement("button");
    btnBorrar.className = "btn-borrar-tarea";
    let imgBorrar = document.createElement("img");
    imgBorrar.src = "./assets/icons/trash.svg";
    btnBorrar.appendChild(imgBorrar);

    accionesDiv.appendChild(btnEditar);
    accionesDiv.appendChild(btnBorrar);

    div.appendChild(checkbox);
    div.appendChild(divContenido);
    div.appendChild(accionesDiv);

    checkbox.addEventListener("change", () => {
        div.style.opacity = "0.5";
        
        setTimeout(() => {
            let currentList = getTasksFromStorage();
            
            let targetIndex = currentList.findIndex(t => 
                t.nombre === tarea.nombre && 
                t.descripcion === tarea.descripcion &&
                t.fecha === tarea.fecha
            );

            if (targetIndex !== -1) {
                currentList[targetIndex].completada = checkbox.checked;
                saveTasksToStorage(currentList);
                if (recargarLista) recargarLista();
            }
        }, 150); 
    });

    btnEditar.addEventListener("click", () => {
        if (onEdit) onEdit(tarea);
    });

    btnBorrar.addEventListener("click", (e) => {
        e.stopPropagation();
        if(confirm("¿Estás seguro de borrar esta tarea?")) {
            div.classList.add("salida-animada");
            setTimeout(() => {
                let currentList = getTasksFromStorage();
                
                let targetIndex = currentList.findIndex(t => 
                    t.nombre === tarea.nombre && 
                    t.descripcion === tarea.descripcion &&
                    t.fecha === tarea.fecha
                );

                if (targetIndex !== -1) {
                    currentList.splice(targetIndex, 1);
                    saveTasksToStorage(currentList);
                    if (recargarLista) recargarLista();
                }
            }, 150);
        }
    });

    return div;
};

export { ItemTarea };