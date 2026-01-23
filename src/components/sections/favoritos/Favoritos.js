import { ItemContacto } from "../../common/itemContacto/itemContacto.js";
import { getContactsFromStorage } from "../../../storage/storage.js";

let Favoritos = (verDetalle) => {
    let section = document.createElement("section");
    section.className = "contactos";

    let header = document.createElement("div");
    header.className = "contactos-header";
    let h2 = document.createElement("h2");
    h2.textContent = "Mis Favoritos";
    header.appendChild(h2);
    section.appendChild(header);

    let listaDiv = document.createElement("div");
    listaDiv.id = "lista-items";

    const renderFavorites = () => {
        listaDiv.innerHTML = "";
        let allContacts = getContactsFromStorage();
        
        let favContacts = allContacts.filter(c => c.favorito === true);

        if (favContacts.length === 0) {
            let msg = document.createElement("p");
            msg.textContent = "No tienes contactos favoritos.";
            msg.style.textAlign = "center";
            msg.style.color = "#888";
            listaDiv.appendChild(msg);
        }

        favContacts.forEach(contacto => {
            listaDiv.appendChild(ItemContacto(contacto, renderFavorites, verDetalle));
        });
    }

    renderFavorites();
    section.appendChild(listaDiv);
    return section;
};

export { Favoritos };