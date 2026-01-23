import { getUserFromStorage } from "../../../storage/storage.js";

let Perfil = () => {
    let container = document.createElement("div");
    container.className = "perfil-container";

    let user = getUserFromStorage();
    
    if (!user) {
        user = { nombre: "Invitado", correo: "invitado@agenda.com" };
    }

    let card = document.createElement("div");
    card.className = "perfil-card";

    let avatar = document.createElement("div");
    avatar.className = "perfil-avatar";
    let img = document.createElement("img");
    img.src = "./assets/icons/user.svg"; 
    avatar.appendChild(img);

    let info = document.createElement("div");
    info.className = "perfil-info";

    let nombre = document.createElement("h2");
    nombre.textContent = user.nombre;
    
    let correo = document.createElement("p");
    correo.className = "perfil-email";
    correo.textContent = user.correo;

    let desc = document.createElement("p");
    desc.className = "perfil-desc";
    desc.textContent = "Cuenta activa - Laboratorio 1";

    info.appendChild(nombre);
    info.appendChild(correo);
    info.appendChild(desc);

    card.appendChild(avatar);
    card.appendChild(info);
    container.appendChild(card);

    return container;
}

export { Perfil };