import { ItemContacto } from "../../common/itemContacto/itemContacto.js";
import { getContactsFromStorage } from "../../../storage/storage.js";

let Contactos = () => {
    let sectionContactos = document.createElement("section");
    sectionContactos.className = "contactos";

    let header = document.createElement("div");
    header.className = "contactos-header";

    let h2 = document.createElement("h2");
    h2.textContent = "Mis Contactos";

    header.appendChild(h2);
    sectionContactos.appendChild(header);

    let listaDiv = document.createElement("div");
    listaDiv.id = "lista-items";

    let contactosLista = getContactsFromStorage();

    contactosLista.forEach(contacto => {
        listaDiv.appendChild(
            ItemContacto("user.svg", `${contacto.nombre} ${contacto.apellido}`, contacto.telefono)
        );
    });

    sectionContactos.appendChild(listaDiv);

    return sectionContactos;
};

export { Contactos };