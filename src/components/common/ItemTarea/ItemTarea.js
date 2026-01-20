import { getTasksFromStorage, saveTasksToStorage } from "../../../storage/storage.js";

let ItemTarea = (tarea, recargarLista) => { 
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

    let etiquetaNombre = document.createElement("h4");
    etiquetaNombre.textContent = tarea.nombre;

    let etiquetaDesc = document.createElement("p");
    etiquetaDesc.textContent = tarea.descripcion;
    
    let etiquetaFecha = document.createElement("span");
    etiquetaFecha.className = "fecha-tarea";

    etiquetaFecha.textContent = `Fecha: ${tarea.fecha}`;

    divInfo.appendChild(etiquetaNombre);
    divInfo.appendChild(etiquetaDesc);
    divInfo.appendChild(etiquetaFecha);

    divContenido.appendChild(divInfo);

    let btnBorrar = document.createElement("button");
    btnBorrar.className = "btn-borrar-tarea";
    let imgBorrar = document.createElement("img");
    imgBorrar.src = "./assets/icons/trash.svg";
    btnBorrar.appendChild(imgBorrar);

    div.appendChild(checkbox);
    div.appendChild(divContenido);
    div.appendChild(btnBorrar);

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