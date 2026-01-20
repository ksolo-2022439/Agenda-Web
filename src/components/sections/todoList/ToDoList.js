import { ItemTarea } from "../../common/ItemTarea/ItemTarea.js";
import { getTasksFromStorage } from "../../../storage/storage.js";

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

    const renderTasks = () => {
        listaDiv.innerHTML = "";

        let taskList = getTasksFromStorage();

        taskList.sort((a, b) => a.completada - b.completada);

        if (taskList.length === 0) {
            let emptyMsg = document.createElement("p");
            emptyMsg.textContent = "No hay tareas pendientes.";
            emptyMsg.style.textAlign = "center";
            emptyMsg.style.color = "#888";
            listaDiv.appendChild(emptyMsg);
        }

        taskList.forEach(tarea => {
            const item = ItemTarea(tarea, renderTasks);
            listaDiv.appendChild(item);
        });
    };

    renderTasks();

    sectionTareas.appendChild(listaDiv);

    return sectionTareas;
};

export { ToDoList };