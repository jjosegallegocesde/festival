let etiqueta = document.getElementById("nombreFestival");
let nombre = "ALTAVOZ/FESTIVAL";
etiqueta.textContent = nombre;


let titulo = document.getElementById("titulo1");
console.log(titulo);
titulo.textContent = "SOBRE EL FESTIVAL";
titulo.classList.add("display-3");

let sorpresa = document.getElementById("menuPrincipal");
sorpresa.classList.remove("bg-dark");
sorpresa.classList.add("fondoPropio");