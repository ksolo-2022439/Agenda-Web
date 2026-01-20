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

    let divIcono = document.createElement("div");
    divIcono.className = "icon-container";
    
    let imgIcon = document.createElement("img");
    imgIcon.src = "./assets/icons/list.svg";
    divIcono.appendChild(imgIcon);

    let divInfo = document.createElement("div");
    divInfo.className = "info-tarea";

    let etiquetaTitulo = document.createElement("h4");
    etiquetaTitulo.textContent = tarea.titulo;

    let etiquetaDesc = document.createElement("p");
    etiquetaDesc.textContent = tarea.descripcion;

    divInfo.appendChild(etiquetaTitulo);
    divInfo.appendChild(etiquetaDesc);

    divContenido.appendChild(divIcono);
    divContenido.appendChild(divInfo);

    div.appendChild(checkbox);
    div.appendChild(divContenido);

    checkbox.addEventListener("change", () => {
        div.classList.add("salida-animada");
        setTimeout(() => {
            let currentList = getTasksFromStorage();
            
            let targetIndex = currentList.findIndex(t => 
                t.titulo === tarea.titulo && t.descripcion === tarea.descripcion
            );

            if (targetIndex !== -1) {
                currentList[targetIndex].completada = checkbox.checked;
                currentList.sort((a, b) => a.completada - b.completada);
                saveTasksToStorage(currentList);
            }
            if (recargarLista) recargarLista();

        }, 150); 
    });

    return div;
};

export { ItemTarea };