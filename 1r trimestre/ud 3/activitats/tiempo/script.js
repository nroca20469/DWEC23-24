//24/10/2023

// No recarga el servidor --> Date() --> ver fechas, contadors i cronometros, relojes, etc
//DOM --> Documetn Object Mode
//BOM --> Browser Object Mode --> ventanas

//funciones setInterval(), y setTimeOut()

//setTimeOut(funcionALlamar,TiempoMS) --> tiene dos parametros, la funcion que llamamos, y la segunda es el tiempo en milisegundos
    //Ejecuta la funcion funcionALlamar, cuando ga transcurrido el tiempo indicado en el segundo parametro(TiempoMS)
    //Importante poner funcionALlamar sin parentesis
    //Si pones parentesis ejecuta la funcion al instante


//setInerval(funcionALlamar,TiempoMM) --> ejecuta la funcionALlamar de manera periodica segun el tiempo del segundo parametro


//clearInterval() --> detiene la funcion iniciada con setInterval()

//clearTimeOut() --> detiene la ejecucion iniciada con setTimeOut()

function crono(){
    let elCrono;
    let miFecha = new Date();
    let horas = miFecha.getHours();
    let minutos = miFecha.getMinutes();
    let segundos = miFecha.getSeconds();
    
    let ampm = "pm";

    if(horas > 12) {
        ampm = "pm";
        horas -= 12;
    } else {
        ampm = "am";
    }

    if(horas < 10) {horas = "0" + horas;}
    if(minutos < 10) {minutos = "0" + minutos;}
    if(segundos < 10) {segundos = "0" + segundos;}

    let laHora = document.getElementById("lahora");  //variables con el mismo nombre que a lo que apunta para que sea a,ms intuitivo
    laHora.innerHTML = horas + ":" + minutos + ":" + segundos + " " + ampm;  //Modificar lo que esta dentro del div
}

window.onload = function() {
    elCrono = setInterval(crono, 1000)
}


const numero = prompt("Elige un numero");
console.log(numero);
