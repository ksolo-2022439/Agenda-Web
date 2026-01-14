import { Button } from "./components/common/button/Button.js";
import { Contactos } from "./components/sections/contactos/Contactos.js";
import { FormularioContacto } from "./components/sections/formulario/FormularioContacto.js";

let viewContacts = function () {
    container.innerHTML = "";
    container.appendChild(Contactos());
}

let viewNewContacts = function () {
    container.innerHTML = "";
    container.appendChild(FormularioContacto());
}

export { viewContacts, viewNewContacts };