import { getContactsFromStorage, saveContactsToStorage } from "../../../storage/storage.js";

let DetalleContacto = (contacto, volverAtras) => {
    let container = document.createElement("div");
    container.className = "detalle-contacto-container";

    let card = document.createElement("div");
    card.className = "detalle-card";

    let header = document.createElement("div");
    header.className = "detalle-header";
    
    let img = document.createElement("img");
    img.src = "./assets/icons/user.svg";
    header.appendChild(img);

    let titulo = document.createElement("h2");
    titulo.textContent = `${contacto.nombre} ${contacto.apellido}`;
    header.appendChild(titulo);

    let infoList = document.createElement("ul");
    infoList.className = "detalle-lista";

    let liTel = document.createElement("li");
    liTel.innerHTML = `<strong>Teléfono:</strong> <span>${contacto.telefono}</span>`;
    infoList.appendChild(liTel);

    let liNombre = document.createElement("li");
    liNombre.innerHTML = `<strong>Nombre:</strong> <span>${contacto.nombre}</span>`;
    infoList.appendChild(liNombre);
    
    let liApellido = document.createElement("li");
    liApellido.innerHTML = `<strong>Apellido:</strong> <span>${contacto.apellido}</span>`;
    infoList.appendChild(liApellido);

    let btnFavorito = document.createElement("button");
    btnFavorito.className = contacto.favorito ? "btn-favorito activo" : "btn-favorito";
    btnFavorito.textContent = contacto.favorito ? "Quitar de Favoritos" : "Agregar a Favoritos";

    btnFavorito.addEventListener("click", () => {
        let lista = getContactsFromStorage();
        let index = lista.findIndex(c => 
            c.nombre === contacto.nombre && 
            c.apellido === contacto.apellido && 
            c.telefono === contacto.telefono
        );

        if (index !== -1) {
            lista[index].favorito = !lista[index].favorito;
            contacto.favorito = lista[index].favorito; 
            saveContactsToStorage(lista);
            
            btnFavorito.textContent = contacto.favorito ? "Quitar de Favoritos" : "Agregar a Favoritos";
            btnFavorito.className = contacto.favorito ? "btn-favorito activo" : "btn-favorito";
        }
    });

    let btnVolver = document.createElement("button");
    btnVolver.textContent = "Volver";
    btnVolver.className = "btn-volver";
    btnVolver.addEventListener("click", () => {
        if(volverAtras) volverAtras();
    });

    card.appendChild(header);
    card.appendChild(infoList);
    card.appendChild(btnFavorito);
    card.appendChild(btnVolver);
    
    container.appendChild(card);

    return container;
};

export { DetalleContacto };