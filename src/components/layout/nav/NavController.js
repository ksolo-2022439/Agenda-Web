import { Contactos } from "../../../components/sections/contactos/Contactos.js";
import { FormularioContacto } from "../../../components/sections/formulario/FormularioContacto.js";
import { ToDoList } from "../../../components/sections/todoList/ToDoList.js";
import { FormularioTarea } from "../../../components/sections/formularioTarea/FormularioTarea.js";
import { DetalleContacto } from "../../../components/sections/detalleContacto/DetalleContacto.js";
import { Favoritos } from "../../../components/sections/favoritos/Favoritos.js";
import { Perfil } from "../../../components/sections/perfil/Perfil.js";

let viewContacts = function (container, viewDetailCallback) {
    container.innerHTML = "";
    container.appendChild(Contactos(viewDetailCallback));
}

let viewNewContacts = function (container, redireccionar) {
    container.innerHTML = "";
    container.appendChild(FormularioContacto(redireccionar));
}

let viewToDo = function (container, onEdit) {
    container.innerHTML = "";
    container.appendChild(ToDoList(onEdit));
}

let viewNewTask = function (container, redireccionar) {
    container.innerHTML = "";
    container.appendChild(FormularioTarea(redireccionar));
}

let viewEditTask = function (container, tarea, redireccionar) {
    container.innerHTML = "";
    container.appendChild(FormularioTarea(redireccionar, tarea));
}

let viewContactDetails = function (container, contacto, backCallback) {
    container.innerHTML = "";
    container.appendChild(DetalleContacto(contacto, backCallback));
}

let viewFavorites = function (container, viewDetailCallback) {
    container.innerHTML = "";
    container.appendChild(Favoritos(viewDetailCallback));
}

let viewProfile = function (container) {
    container.innerHTML = "";
    container.appendChild(Perfil());
}

export { 
    viewContacts, 
    viewNewContacts, 
    viewToDo, 
    viewNewTask, 
    viewEditTask,
    viewContactDetails,
    viewFavorites,
    viewProfile
};