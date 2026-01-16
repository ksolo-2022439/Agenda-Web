import { ItemTarea } from "../../common/itemTarea/ItemTarea.js";
import { TaskList } from "../contactos/db.js";

let ToDoList = () => {
    let sectionTareas = document.createElement("section");
    sectionTareas.className = "todo-list";

    let header = document.createElement("div");
    header.className = "todo-header";

    let h2 = document.createElement("h2");
    h2.textContent = "Mis Tareas";

    header.appendChild(h2);
    sectionTareas.appendChild(header);

    let listaDiv = document.createElement("div");
    listaDiv.className = "lista-tareas-container";

    TaskList.forEach(tarea => {
        listaDiv.appendChild(
            ItemTarea(tarea.titulo, tarea.descripcion)
        );
    });

    sectionTareas.appendChild(listaDiv);

    return sectionTareas;
};

export { ToDoList };