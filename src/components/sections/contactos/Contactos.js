import { ItemContacto } from "../../common/itemContacto/itemContacto.js";
import { FormularioContacto } from "../formulario/FormularioContacto.js";

let Contactos = () => {
    let sectionContactos = document.createElement("section");
    sectionContactos.className = "contactos";

    let header = document.createElement("div");
    header.className = "contactos-header";

    let h2 = document.createElement("h2");
    h2.textContent = "Mis Contactos";

    let btnAgregar = document.createElement("button");
    btnAgregar.textContent = "+ Añadir Nuevo";
    btnAgregar.className = "btn-abrir-form";

    header.append(h2, btnAgregar);
    sectionContactos.appendChild(header);

    let listaDiv = document.createElement("div");
    listaDiv.id = "lista-items";

    let wrapperForm = document.createElement("div");
    wrapperForm.className = "form-wrapper";

    const alEnviar = (datos) => {
        listaDiv.appendChild(
            ItemContacto("user.svg", datos.nombre, datos.telefono)
        );
        wrapperForm.classList.remove("abierto");
        btnAgregar.classList.remove("activo");
        btnAgregar.textContent = "+ Añadir Nuevo";
    };

    wrapperForm.appendChild(FormularioContacto(alEnviar));
    sectionContactos.appendChild(wrapperForm);

    btnAgregar.addEventListener("click", () => {
        const estaAbierto = wrapperForm.classList.toggle("abierto");
        btnAgregar.classList.toggle("activo");
        btnAgregar.textContent = estaAbierto
            ? "✕ Cancelar"
            : "+ Añadir Nuevo";
    });

    listaDiv.appendChild(
        ItemContacto("user.svg", "Kenneth Solorzano", "12345678")
    );

    sectionContactos.appendChild(listaDiv);

    return sectionContactos;
};

export { Contactos };
