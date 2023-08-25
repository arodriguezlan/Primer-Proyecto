const pantalla = document.querySelector(".pantalla");
const numerosYOperadores = document.querySelectorAll(".numeros button, .dif button");
const botonC = document.querySelector("#cero");
const botonCE = document.querySelector("#borrar");
const botonIgual = document.querySelector("#igual");

let evalPending = false;
let clearScreen = false;

numerosYOperadores.forEach(boton => {
    boton.addEventListener("click", () => {
        const botonPresionado = boton.textContent;
        if (evalPending) {
            pantalla.textContent = botonPresionado;
            evalPending = false;
        } else {
            pantalla.textContent += botonPresionado;
        }
    });
});

botonC.addEventListener("click", () => {
    pantalla.textContent = "0";
    clearScreen = false;
    evalPending = false;
});

botonCE.addEventListener("click", () => {
    pantalla.textContent = "0";
    clearScreen = false;
    evalPending = false;
});

botonIgual.addEventListener("click", () => {
    if (!evalPending) {
        pantalla.textContent = eval(pantalla.textContent);
        evalPending = true;
    }
});
