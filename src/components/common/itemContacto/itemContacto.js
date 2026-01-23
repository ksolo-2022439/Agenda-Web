import { getContactsFromStorage, saveContactsToStorage } from "../../../storage/storage.js";

let ItemContacto = (contacto, recargarLista, verDetalle) => { 
    let div = document.createElement("div");
    div.className = "item-contacto";

    let divInfo = document.createElement("div");
    divInfo.className = "item-contacto-info";
    
    let etiquetaImg = document.createElement("img");
    etiquetaImg.src = `./assets/icons/user.svg`;

    let divTexto = document.createElement("div");
    divTexto.className = "info-contacto";

    let etiquetaNombre = document.createElement("p");
    etiquetaNombre.textContent = `${contacto.nombre} ${contacto.apellido}`;

    let etiquetaTelefono = document.createElement("p");
    etiquetaTelefono.textContent = contacto.telefono;

    divTexto.appendChild(etiquetaNombre);
    divTexto.appendChild(etiquetaTelefono);

    divInfo.appendChild(etiquetaImg);
    divInfo.appendChild(divTexto);

    let btnBorrar = document.createElement("button");
    btnBorrar.className = "btn-borrar-contacto";
    let imgBorrar = document.createElement("img");
    imgBorrar.src = "./assets/icons/trash.svg";
    btnBorrar.appendChild(imgBorrar);

    div.appendChild(divInfo);
    div.appendChild(btnBorrar);

    if (verDetalle) {
        divInfo.style.cursor = "pointer";
        divInfo.addEventListener("click", () => {
            verDetalle(contacto);
        });
    }

    btnBorrar.addEventListener("click", (e) => {
        e.stopPropagation();
        if(confirm(`¿Eliminar a ${contacto.nombre} ${contacto.apellido}?`)) {
            let currentList = getContactsFromStorage();

            let newList = currentList.filter(c => 
                !(c.nombre === contacto.nombre && 
                  c.apellido === contacto.apellido && 
                  c.telefono === contacto.telefono)
            );

            saveContactsToStorage(newList);
            if(recargarLista) recargarLista();
        }
    });

    return div;
};

export { ItemContacto };