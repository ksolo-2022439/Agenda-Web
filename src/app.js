import { Button } from "./components/common/button/Button.js";
import { Contactos } from "./components/sections/contactos/Contactos.js";

let app = document.getElementById("app");
let nav = document.getElementById("nav");
let container = document.getElementById("container");

nav.appendChild(Button("Agenda", "agenda", "list.svg"));
nav.appendChild(Button("+", "plus", "plus.svg"));
nav.appendChild(Button("ToDo", "todoList", "users.svg"));
nav.appendChild(Button("Crear Tarea", "plus", "plus.svg"));

container.appendChild(Contactos());

app.appendChild(nav);
app.appendChild(container);