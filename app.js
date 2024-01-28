let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
 
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p',`Acertaste el número en ${intentos} ${intentos === 1 ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        // El usuario no acerto
        if (numeroDeUsuario > numeroSecreto) {
        asignarTextoElemento('p','El número secreto es menor');
        } else {
        asignarTextoElemento('p','El número secreto es mayor');       
        }
        intentos++;
        limpiarCaja();
}    
    return;
}

function limpiarCaja() {
     document.querySelector('#valorUsuario').value = '';

}
function generarNumeroSecreto() {

    let numeroGenerado =  Math.floor(Math.random()*numeroMaximo)+1;
    console.log(numeroGenerado);
    // confirmamos si ya llegamos al número final
    if(listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento ('p', 'Ya se sortearon todos los números posibles');
    } else {
    // si el numero generado esta en la lista
        if(listaNumerosSorteados.includes(numeroGenerado)) {
            //volvermos a generar un numero
            return generarNumeroSecreto();
        } else {
            //si el número no esta en la lista lo agregamos al arreglo
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function condicionesIniciales(){
    asignarTextoElemento('h1','Juego de número secreto');
    asignarTextoElemento('p',`Indica un número del 1 al ${numeroMaximo}`);
    intentos = 1;
    numeroSecreto = generarNumeroSecreto();
}

function reiniciarJuego(){
    //limpiar caja
    limpiarCaja();
    // indicar mensaje de intervalo de número
    //generar número aleatorio
    //inicializar número de intentos
    condicionesIniciales();
    //deshabilitar el boton de nuevo juego 
    document.querySelector('#reiniciar').setAttribute('disabled','true');
}

condicionesIniciales();