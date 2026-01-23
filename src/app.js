import { Button } from "./components/common/button/Button.js";
import { 
    viewContacts, 
    viewNewContacts, 
    viewToDo, 
    viewNewTask,
    viewEditTask,
    viewContactDetails,
    viewFavorites,
    viewProfile
} from "../src/components/layout/nav/NavController.js";

let app = document.getElementById("app");
let nav = document.getElementById("nav");
let container = document.getElementById("container");

const loadAgenda = () => {
    viewContacts(container, (contacto) => {
        viewContactDetails(container, contacto, loadAgenda);
    });
};

const loadFormulario = () => {
    viewNewContacts(container, loadAgenda);
};

const loadToDo = () => {
    viewToDo(container, (tareaAEditar) => {
        viewEditTask(container, tareaAEditar, loadToDo);
    });
};

const loadFormularioTarea = () => {
    viewNewTask(container, loadToDo);
};

const loadFavoritos = () => {
    viewFavorites(container, (contacto) => {
        viewContactDetails(container, contacto, loadFavoritos);
    });
};

const loadPerfil = () => {
    viewProfile(container);
};

nav.appendChild(Button("Agenda", "agenda", "list.svg", loadAgenda));
nav.appendChild(Button("Crear Contacto", "btnCrearContacto", "plus.svg", loadFormulario));
nav.appendChild(Button("Favoritos", "favoritos", "star.svg", loadFavoritos)); 
nav.appendChild(Button("Perfil", "perfil", "user.svg", loadPerfil));
nav.appendChild(Button("ToDo List", "todoList", "check.svg", loadToDo)); 
nav.appendChild(Button("Crear Tarea", "plusTarea", "plus.svg", loadFormularioTarea));

loadAgenda();

app.appendChild(nav);
app.appendChild(container);