let ItemContacto = (imgContacto, nombre, telefono) => { 
    let div = document.createElement("div");
    div.className = "item-contacto";

    let etiquetaImg = document.createElement("img");
    etiquetaImg.src = `./assets/icons/${imgContacto}`;

    let etiquetaNombre = document.createElement("p");
    etiquetaNombre.textContent = nombre;

    let etiquetaTelefono = document.createElement("p");
    etiquetaTelefono.textContent = telefono;

    div.appendChild(etiquetaImg);
    div.appendChild(etiquetaNombre);
    div.appendChild(etiquetaTelefono);

    return div;
};

export { ItemContacto };