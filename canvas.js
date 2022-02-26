function dibujarPalabra(palabra) {
    document.getElementById("palabraAhorcado").innerHTML = "";
    document.getElementById("palabraAhorcado").innerHTML = palabra;
}
function dibujarAviso(letra, aviso) {
    let msg = document.getElementById("aviso");
    if (aviso == 'limpiar') {
        msg.innerHTML = "";
    }
    if (aviso == 'acertada') {
        msg.innerHTML = "la letra <strong>" + letra + " </strong> ya la has acertado &#128521"; //😉
    }
    if (aviso == 'fallada') {
        msg.innerHTML = "la letra <strong>" + letra + " </strong> ya la tecleaste  &#128534"; /*😖*/
    }
}

function dibujarEmoji(paso) {
    let emo = document.getElementById("emoji");
    emo.innerHTML = "";
    switch (paso) {
        case 9:
            emo.innerHTML = "&#128512;"; //😀
            break;
        case 8:
            emo.innerHTML = "&#128578;"; //🙂
            break;
        case 7:
            emo.innerHTML = "&#128528;"; //😐
            break;
        case 6:
            emo.innerHTML = "&#128550;"; //😦
            break;
        case 5:
            emo.innerHTML = "&#128533;"; //😕
            break;
        case 4:
            emo.innerHTML = "&#128543;"; //😟
            break;
        case 3:
            emo.innerHTML = "&#128547;"; //😣
            break;
        case 2:
            emo.innerHTML = "&#128542;"; //😞
            break;
        case 1:
            emo.innerHTML = "&#128546;"; //😢
            break;
    }
}

function dibujarMensajes() {
    document.getElementById("estasnoson").innerHTML = "";
    document.getElementById("intentos").innerHTML = "";

    document.getElementById("estasnoson").innerHTML = letrasFalladas;
    document.getElementById("intentos").innerHTML = intentos;
}

function dibujarPerdiste() {
    document.getElementById("emoji").classList.add("letraroja");
    document.getElementById("emoji").innerHTML = "&#128128; Fin del juego! &#128128;";//💀
    document.getElementById("aviso").innerHTML = "";
    document.getElementById("p1").innerHTML = "La palabra secreta era:";
    document.getElementById("estasnoson").innerHTML = palabraAhorcado;
    document.getElementById("p2").innerHTML = "";
    document.getElementById("intentos").innerHTML = "Intentalo de nuevo!";
}
function dibujarGanaste() {
    document.getElementById("emoji").innerHTML = "&#128513;";//😁	128513	
    document.getElementById("aviso").innerHTML = "";
    document.getElementById("p1").innerHTML = "";
    document.getElementById("estasnoson").classList.add("letraverde");
    document.getElementById("estasnoson").innerHTML = "Ganaste, Felicidades!";
    document.getElementById("p2").innerHTML = "";
    document.getElementById("intentos").innerHTML = "Juega de nuevo!";
}

//--> Lineas de dibujo del ahorcado <--/
function trazo(contx, x1, y1, x2, y2) {

    contx.beginPath();
    contx.lineWidth = 8;
    contx.strokeStyle = " rgb(211, 207, 207)";
    contx.moveTo(x1, y1);
    contx.lineTo(x2, y2);
    contx.stroke();
}

function base() {
    const canvas = document.querySelector("#canvas-juego");
    var contx = canvas.getContext("2d");
    trazo(contx, 70, 520, 500, 520);
}
function poste() {
    const canvas = document.querySelector("#canvas-juego");
    var contx = canvas.getContext("2d");
    trazo(contx, 110, 520, 110, 80);
}
function rama() {
    const canvas = document.querySelector("#canvas-juego");
    var contx = canvas.getContext("2d");
    trazo(contx, 110, 80, 350, 80);
}
function sogacabeza() {
    const canvas = document.querySelector("#canvas-juego");
    var contx = canvas.getContext("2d");
    trazo(contx, 300, 80, 300, 120);
    contx.beginPath();
    contx.arc(300, 150, 30, 0, 2 * Math.PI);
    contx.stroke();
}
function cuerpo() {
    const canvas = document.querySelector("#canvas-juego");
    var contx = canvas.getContext("2d");
    trazo(contx, 300, 180, 300, 280);
}
function manoizq() {
    const canvas = document.querySelector("#canvas-juego");
    var contx = canvas.getContext("2d");
    trazo(contx, 300, 180, 240, 220);
}
function manoder() {
    const canvas = document.querySelector("#canvas-juego");
    var contx = canvas.getContext("2d");
    trazo(contx, 300, 180, 360, 220);
}
function piernaizq() {
    const canvas = document.querySelector("#canvas-juego");
    var contx = canvas.getContext("2d");
    trazo(contx, 300, 280, 240, 360);
}
function piernader() {
    const canvas = document.querySelector("#canvas-juego");
    var contx = canvas.getContext("2d");
    trazo(contx, 300, 280, 360, 360);
}

function dibujarAhorcado(nodo) {
    switch (nodo) {
        case 8: base(); break;
        case 7: poste(); break;
        case 6: rama(); break;
        case 5: sogacabeza(); break;
        case 4: cuerpo(); break;
        case 3: manoizq(); break;
        case 2: manoder(); break;
        case 1: piernaizq(); break;
        case 0: piernader(); break;
    }

}