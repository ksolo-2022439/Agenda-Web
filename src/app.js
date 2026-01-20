import { Button } from "./components/common/button/Button.js";
import { viewContacts, viewNewContacts, viewToDo, viewNewTask } from "../src/components/layout/nav/NavController.js";

let app = document.getElementById("app");
let nav = document.getElementById("nav");
let container = document.getElementById("container");

const loadAgenda = () => {
    viewContacts(container);
};

const loadFormulario = () => {
    viewNewContacts(container, loadAgenda);
};

const loadToDo = () => {
    viewToDo(container);
};

const loadFormularioTarea = () => {
    viewNewTask(container, loadToDo);
};

nav.appendChild(Button("Agenda", "agenda", "list.svg", loadAgenda));
nav.appendChild(Button("Crear Contacto", "btnCrearContacto", "plus.svg", loadFormulario));
nav.appendChild(Button("ToDo", "todoList", "users.svg", loadToDo));
nav.appendChild(Button("Crear Tarea", "plus", "plus.svg", loadFormularioTarea));

loadAgenda();

app.appendChild(nav);
app.appendChild(container);