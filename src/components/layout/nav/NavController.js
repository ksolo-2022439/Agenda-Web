import { Contactos } from "../../../components/sections/contactos/Contactos.js";
import { FormularioContacto } from "../../../components/sections/formulario/FormularioContacto.js";
import { ToDoList } from "../../../components/sections/todoList/ToDoList.js";
import { FormularioTarea } from "../../../components/sections/formularioTarea/FormularioTarea.js";

let viewContacts = function (container) {
    container.innerHTML = "";
    container.appendChild(Contactos());
}

let viewNewContacts = function (container, redireccionar) {
    container.innerHTML = "";
    container.appendChild(FormularioContacto(redireccionar));
}

let viewToDo = function (container) {
    container.innerHTML = "";
    container.appendChild(ToDoList());
}

let viewNewTask = function (container, redireccionar) {
    container.innerHTML = "";
    container.appendChild(FormularioTarea(redireccionar));
}

export { viewContacts, viewNewContacts, viewToDo, viewNewTask };