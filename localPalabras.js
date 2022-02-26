var palabrasUsuario=[];

function guardarPalabraLocal(localPalabras){
    localStorage.clear();
    localStorage.setItem("lsPalabrasUsuario", JSON.stringify(localPalabras));
    console.log("localStorage:" + JSON.stringify(localPalabras));
}

function recuperarPalabrasLocal(){
    let localPalabras=[];
    // Recupera del localstorage los valores del array, o un array vacio
    localPalabras = JSON.parse(localStorage.getItem("lsPalabrasUsuario") || "[]" );
    return localPalabras;
}

function procesarPalabraUsuario(palabra){
    let palabrasUsuario = recuperarPalabrasLocal();
        palabrasUsuario.push(palabra);
        guardarPalabraLocal(palabrasUsuario);
        alert("Se ha agregado la palabra " +palabra +" al diccionario");
}
