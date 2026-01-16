let ItemTarea = (titulo, descripcion) => { 
    let div = document.createElement("div");
    div.className = "item-tarea";

    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.className = "checkbox-tarea";

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
    etiquetaTitulo.textContent = titulo;

    let etiquetaDesc = document.createElement("p");
    etiquetaDesc.textContent = descripcion;

    divInfo.appendChild(etiquetaTitulo);
    divInfo.appendChild(etiquetaDesc);

    divContenido.appendChild(divIcono);
    divContenido.appendChild(divInfo);

    div.appendChild(checkbox);
    div.appendChild(divContenido);

    checkbox.addEventListener("change", () => {
        if (checkbox.checked) {
            div.classList.add("completada");
        } else {
            div.classList.remove("completada");
        }
    });

    return div;
};

export { ItemTarea };