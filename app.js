let numeroSecreto =0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeromax = 10;


condicionesIniciales(); 


function asignarTextoElemento(Elemento,texto){
    let titulo = document.querySelector(Elemento);
    titulo.innerHTML = texto;
}

function verificarIntento(){
    let numeroUsuario = parseInt(document.getElementById('numeroUsuario').value);
    
    if(numeroSecreto==numeroUsuario){
        asignarTextoElemento('p',`Acertaste el numero!! en ${intentos} ${(intentos ==1) ? 'vez' : 'veces'}`)
        document.getElementById('reiniciar').removeAttribute('disabled');

    }else{
        if(numeroUsuario < numeroSecreto){
            asignarTextoElemento('p','El numero es mas alto')
        }else{
            asignarTextoElemento('p','EL numero es mas bajo')
        }
        intentos++
        limpiarCaja();
    }
}

function condicionesIniciales(){
    asignarTextoElemento('h1','Juego del numero secreto!');
    asignarTextoElemento('p','Indica un numero del 1 al 10');
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego(){
    limpiarCaja();
    condicionesIniciales();
    document.querySelector('#reiniciar').setAttribute('disabled','true')
}

function limpiarCaja(){
    // se usa # para obtener el elemento por su id 
    document.querySelector('#numeroUsuario').value = '';
}

function generarNumeroSecreto(){
    let numerogenerado = Math.floor(Math.random()*10) + 1;

    console.log(numerogenerado);
    console.log(listaNumerosSorteados);

    if(listaNumerosSorteados.length == numeromax){
        asignarTextoElemento('p','ya se sortearon todos los numeros posibles')
    }else{

        if (listaNumerosSorteados.includes(numerogenerado)){
            return generarNumeroSecreto();
        }else{
            listaNumerosSorteados.push(numerogenerado)
            return numerogenerado
        }
    }
}
