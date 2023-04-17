const h1 = document.querySelector("h1");
const inputUno = document.querySelector("#calculoUno");
const inputDos = document.querySelector("#calculoDos");
const btn = document.querySelector("#btnCalcular");
const resultado = document.querySelector("#resultado");
const form = document.querySelector("#formulario");

// Escuchar los eventos
// btn.addEventListener("click", btnCLick);
form.addEventListener("submit", btnCLick);

// Para escuchar los eventos
//Por defecto guarda texto
function btnCLick(event) {
  event.preventDefault();
  resultado.innerHTML = parseInt(inputUno.value) + parseInt(inputDos.value);
}
