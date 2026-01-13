let menu = function () {
    // Ejercicio 2
    let divgrande = document.createElement("div");
    divgrande.className = "div-padre"

    let div1 = document.createElement("div");
    div1.className = "div-chiquito"
    divgrande.appendChild(div1);

    let div2 = document.createElement("div");
    div2.className = "div-chiquitito"
    divgrande.appendChild(div2);

    return divgrande;
}

export { menu };