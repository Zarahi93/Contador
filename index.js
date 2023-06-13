//******Se declaran las variables a utilizar********
let contador = 0;

//Selecccionar los elementos a utilizar
const valor = document.getElementById("valor");
const restar = document.getElementById("decrementar");
const reiniciar = document.getElementById("reiniciar");
const agregar = document.getElementById("incrementar");

//Agregar funcionalidad a botones

restar.onclick = function() {
    contador--;
    valor.innerHTML = contador;
};
 reiniciar.onclick = function() {
    contador = 0;
    valor.innerHTML = contador;
 };
 agregar.onclick = function() {
    contador++;
    valor.innerHTML = contador;
 };