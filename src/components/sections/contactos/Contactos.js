import { ItemContacto } from "../../common/itemContacto/itemContacto.js";
import { getContactsFromStorage } from "../../../storage/storage.js";

let Contactos = (verDetalle) => {
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

    const renderContacts = () => {
        listaDiv.innerHTML = "";
        let contactosLista = getContactsFromStorage();

        if (contactosLista.length === 0) {
            let emptyMsg = document.createElement("p");
            emptyMsg.textContent = "No tienes contactos guardados.";
            emptyMsg.style.textAlign = "center";
            emptyMsg.style.color = "#888";
            listaDiv.appendChild(emptyMsg);
        }

        contactosLista.forEach(contacto => {
            listaDiv.appendChild(
                ItemContacto(contacto, renderContacts, verDetalle)
            );
        });
    }

    renderContacts();

    sectionContactos.appendChild(listaDiv);

    return sectionContactos;
};

export { Contactos };