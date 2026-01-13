import { menu } from "./menu.js";


let root = document.getElementById("root");

root.innerHTML = "<h1>Hola Mundo</h1>";

let h1 = document.createElement("h1");
h1.innerHTML = "Etiquetas para texto";
root.appendChild(h1);

// Agregar una lista de elementos HTML para texto

let lista = document.createElement("ul");

let li1 = document.createElement("li");
li1.innerHTML = "Etiqueta para texto: p";
lista.appendChild(li1);


let li2 = document.createElement("li");
li2.innerHTML = "Etiqueta para texto: span";
lista.appendChild(li2);

root.appendChild(lista);

root.appendChild(menu());