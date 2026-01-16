import { Button } from "./components/common/button/Button.js";
import { Contactos } from "./components/sections/contactos/Contactos.js";
import { FormularioContacto } from "./components/sections/formulario/FormularioContacto.js";
import { ToDoList } from "./components/sections/todoList/ToDoList.js";
import { FormularioTarea } from "./components/sections/formularioTarea/FormularioTarea.js";

let app = document.getElementById("app");
let nav = document.getElementById("nav");
let container = document.getElementById("container");

const loadAgenda = () => {
    container.innerHTML = "";
    container.appendChild(Contactos());
};

const loadFormulario = () => {
    container.innerHTML = "";
    container.appendChild(FormularioContacto(loadAgenda));
};

const loadToDo = () => {
    container.innerHTML = "";
    container.appendChild(ToDoList());
};

const loadFormularioTarea = () => {
    container.innerHTML = "";
    container.appendChild(FormularioTarea(loadToDo));
};

nav.appendChild(Button("Agenda", "agenda", "list.svg", loadAgenda));
nav.appendChild(Button("Crear Contacto", "btnCrearContacto", "plus.svg", loadFormulario));
nav.appendChild(Button("ToDo", "todoList", "users.svg", loadToDo));
nav.appendChild(Button("Crear Tarea", "plus", "plus.svg", loadFormularioTarea));

loadAgenda();

app.appendChild(nav);
app.appendChild(container);