const LOCAL_STORAGE_KEY = 'agenda_telefonica';
const LOCAL_STORAGE_TASK_KEY = 'agenda_tareas';

const initialContacts = [
    { nombre: "Juan", apellido: "Perez", telefono: "12345678" },
    { nombre: "María", apellido: "Gómez", telefono: "23456789" },
    { nombre: "Carlos", apellido: "López", telefono: "34567890" },
    { nombre: "Ana", apellido: "Martínez", telefono: "45678901" }
];

const initialTasks = [
    { nombre: "Comprar suministros", descripcion: "Papel, tinta y café", fecha: "2023-11-20", completada: false },
    { nombre: "Reunión de equipo", descripcion: "Viernes a las 10:00 AM", fecha: "2023-11-21", completada: false },
    { nombre: "Actualizar sitio web", descripcion: "Subir cambios al repositorio", fecha: "2023-11-22", completada: false }
];

function saveContactsToStorage(contactos) {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contactos));
}

function getContactsFromStorage() {
    const stored = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (!stored) {
        saveContactsToStorage(initialContacts);
        return initialContacts;
    }
    return JSON.parse(stored);
}

function saveTasksToStorage(tareas) {
    localStorage.setItem(LOCAL_STORAGE_TASK_KEY, JSON.stringify(tareas));
}

function getTasksFromStorage() {
    const stored = localStorage.getItem(LOCAL_STORAGE_TASK_KEY);
    if (!stored) {
        saveTasksToStorage(initialTasks);
        return initialTasks;
    }
    return JSON.parse(stored);
}

export { 
    saveContactsToStorage, 
    getContactsFromStorage,
    saveTasksToStorage,
    getTasksFromStorage 
};