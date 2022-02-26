
var btnIniciar = document.getElementById('iniciar-juego');
var btnReiniciar = document.getElementById("btn-reiniciar");
var btnPalabra = document.getElementById("btn-nueva-palabra");

btnIniciar.addEventListener('click', function (e) {
	e.preventDefault();
	ocultarMenuInicial();
	ocultarReiniciar();
	mostrarAreaJuego();
	iniciarJuego();
});

btnReiniciar.addEventListener('click', function (e) {
	window.location.reload();
});

btnPalabra.addEventListener('click', function (e) {
	e.preventDefault();
	let keyValue = document.getElementById("nueva-palabra").value;
	console.log(keyValue);
	if (keyValue == "" || keyValue == null) {
		alert("Debe escribir una palabra")
	} else {
		keyValue = keyValue.toUpperCase();
		if (keyValue.match(/^[A-Z&Ñ]*$/)) {
			console.log("Palabra agregada:" + keyValue);
			procesarPalabraUsuario(keyValue);
		}
		else {
			alert('Hay un error en la palabra!');
		}

		document.getElementById("nueva-palabra").value = "";
		document.getElementById("nueva-palabra").focus();
	}
});

function ocultarMenuInicial() {
	document.getElementById('principal').style.display = 'none';
};
function mostrarMenuInicial() {
	document.getElementById('principal').style.display = 'block';
};

function ocultarAreaJuego() {
	document.getElementById('area-juego').style.display = 'none';
};
function mostrarAreaJuego() {
	document.getElementById('area-juego').style.display = 'block';
};

function ocultarReiniciar() {
	document.getElementById('reiniciar').style.display = 'none';
};
function mostrarReiniciar() {
	document.getElementById('reiniciar').style.display = 'block';
};
