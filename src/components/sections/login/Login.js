import { saveUserToStorage } from "../../../storage/storage.js";

let login = function () {

    let loginSection = document.createElement("section");

    let h3 = document.createElement("h3");
    h3.innerHTML = "Bienvenido";

    let nombre = document.createElement("input");
    nombre.type = "text";
    nombre.placeholder = "Nombre completo";
    nombre.required = true;

    let correo = document.createElement("input");
    correo.type = "email";
    correo.placeholder = "Correo electrónico";
    correo.required = true;

    let password = document.createElement("input");
    password.type = "password";
    password.placeholder = "Contraseña";
    password.required = true;

    let button = document.createElement("button");
    button.innerHTML = "Ingresar";
    
    button.addEventListener("click", (e) => {
        e.preventDefault();
        
        if (nombre.value.trim() === "" || correo.value.trim() === "" || password.value.trim() === "") {
            alert("Por favor llene todos los campos (Nombre, Correo y Contraseña)");
            return;
        }

        const usuario = {
            nombre: nombre.value,
            correo: correo.value
        };

        saveUserToStorage(usuario);
        window.location.href = "src/app.html";
    });

    loginSection.appendChild(h3);
    loginSection.appendChild(nombre);
    loginSection.appendChild(correo);
    loginSection.appendChild(password);
    loginSection.appendChild(button);

    return loginSection;
}

export { login };