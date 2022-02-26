var palabraAhorcado;
var palabraPorLetras;
var coincidencia = [];
var guionesLetras;
var teclaLetra;
var eventoTecla = false;
var letrasAcertadas = [];
var letrasFalladas = [];
var intentos = 9;
var gameover=false;
var ganador=false;

function listaPalabras() {
    let listaInicial = ["TECLADO", "BOCINA", "REFRIGERADOR", "MURCIELAGO", "AUTOBUS", "DIRECTORIO", "MATEMATICAS",
        "PROGRAMACION", "AHORCADO", "LAPIZ", "LLAVE", "CANADA", "CINTA", "NUMERO", "DIAMANTE", "FERROCARRIL"];
    let listaLocal = recuperarPalabrasLocal();
    /* Para unir dos o mas arrays, se puede ocupar el operador de propagación (spread operator):
        Permite que una expresión sea expandida en situaciones donde se esperan múltiples argumentos.*/
    let palabrasahorcado = [...listaInicial,...listaLocal];
    return palabrasahorcado;
}

function obtenerPalabra() {
    let palabra = listaPalabras();
    let ahorcado = palabra[Math.floor(Math.random() * palabra.length)];
    return ahorcado;
}

function letrasPalabra(palabra) {
    let letras = palabra.split("");
    return letras;
}

function rellenarPalabra(palabra, letra, coincidencia) {
    let descifrada, tempPalabra;

    if (letra == null) {
        descifrada = palabra.replace(/./gi, "_");
        console.log('inicial: ' + descifrada);
    }
    else {
        tempPalabra = letrasPalabra(palabra);
        coincidencia.forEach(function (posicion) {
            tempPalabra.forEach(function (item, idx, arr) {
                if (idx == posicion) {
                    arr[idx] = letra;
                }
            })
        })
        descifrada = tempPalabra.join("");
        console.log('Descifrando: ' + descifrada);
    }
    return descifrada;
}

function infoLetra(letra) {
    let checarletra = true;
    if (letrasFalladas.includes(letra)) {
        checarletra = false;
        dibujarAviso(letra, 'fallada');
    } else {
        if (letrasAcertadas.includes(letra)) {
            checarletra = false;
            dibujarAviso(letra, 'acertada');
        }
    }
    return checarLetra;
}

function checarLetra(letra) {
    let n = 0;
    coincidencia = [];
    for (i = 0; i < palabraAhorcado.length; i++) {
        if (palabraAhorcado[i] == letra) {
            coincidencia[n] = i;
            n++;
        }
    }

    if (coincidencia.length > 0) {
        if (!letrasAcertadas.includes(letra)) {
            letrasAcertadas.push(letra);
        }
    } else { //(coincidencia.length<=0)
        if (!letrasFalladas.includes(letra)) {
            console.log("Letra no pertenece :" + letra);
            letrasFalladas.push(letra);
            --intentos;
            console.log('intentos: '+intentos);
        }
    }
}

function leerLetra(event) {
    teclaLetra = "";
    if (event.which != 0 && event.which != 13) {
        var keyValue = event.key;
        keyValue = keyValue.toUpperCase();
        if ( (/[A-Z&Ñ]/g.test(keyValue)) ) {
            teclaLetra = keyValue;
            jugarAhorcado(teclaLetra);
        } else {
            alert("Solo teclas de la A a la Z");
        }
    }
}

function terminarjuego(){
    let fin = false;
    if (guionesLetras==palabraAhorcado){
        fin = true;
        ganador = true;
    }
    if (intentos==0) {
        fin = true;
        gameover = true;
    }
    return fin;
}

function validarjuego(){
    if (terminarjuego()) {
        if (gameover) {
            setTimeout(() => {
                dibujarPerdiste();
        }, 500);
        }
        if (ganador) {
            setTimeout(() => {
                dibujarGanaste();
            }, 500);
        }
        window.removeEventListener("keypress", leerLetra);
        eventoTecla = false;
        
        setTimeout(() => {
            mostrarReiniciar();
        }, 800);
    }
}

function jugarAhorcado(teclaLetra) {

    if (infoLetra(teclaLetra)) {

        setTimeout(() => {
            dibujarAviso("", 'limpiar');
        }, 800);

        checarLetra(teclaLetra);
        guionesLetras = rellenarPalabra(guionesLetras, teclaLetra, coincidencia);
        dibujarPalabra(guionesLetras);

        dibujarMensajes();
        dibujarAhorcado(intentos);
        dibujarEmoji(intentos);
        validarjuego();
        
    }
}

function iniciarJuego() {
    palabraAhorcado = obtenerPalabra();//PAL
    palabraPorLetras = letrasPalabra(palabraAhorcado); //'P','A','L'
    guionesLetras = rellenarPalabra(palabraAhorcado, null, coincidencia);//'_','_','_'
    console.log('palabraAhorcado: ' + palabraAhorcado);

    dibujarPalabra(guionesLetras);

    //Activar lectura de teclas para iniciar el ahorcado
    eventoTecla = true;
    if (eventoTecla) {
       // window.addEventListener("keydown", leerLetra);
        window.addEventListener("keypress",leerLetra);
    }
}
