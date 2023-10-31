//Llamar a variables
/*let cronometro = document.getElementById('cronometro');
let elCrono;
let miFecha = new Date();

//Crear funcion cronometroFunction
function cronometroFunction() {
    let cronoO = new Date();//"January 01, 1970 ");
    cronoO.setHours(0,0,0,0);

    let horas = cronoO.getHours();
    let minutos = cronoO.getMinutes();
    let segundos = cronoO.getSeconds();

    if(horas < 10){ horas = "0" + horas;}
    if(minutos < 10){ minutos = "0" + minutos;}
    if(segundos < 10){ segundos = "0" + segundos;}
    //segundos.setSeconds(++1);
    cronometro.innerHTML = horas + ":" + minutos + ":" + segundos;
}

function startCrono() {
    elCrono = setInterval(cronometroFunction, 1000);
}

//Llamar a boton start
function stopCrono(){
    elCrono = clearInterval(elCrono);
    //cronometro.innerHTML = "00:00:00";
}*/


//SOLUCION
let elCrono;
let miFecha = new Date();
let laHora = document.getElementById('cronometro');

//inicializar tiempo a 0
miFecha.setHours(0, 0, 0, 0);

//Inicializar laHora
laHora.innerHTML  = "00:00:00";

function crono() {
    let horas = miFecha.getHours();
    let minutos = miFecha.getMinutes();
    let segundos = miFecha.getSeconds();

    segundos += 1;

    if(segundos == 60){
        segundos = 0;
        minutos += 1;

        miFecha.setMinutes(minutos);
    }

    if(minutos == 60){
        minutos = 0;
        horas += 1;

        miFecha.setHours(horas);
    }

    miFecha.setSeconds(segundos);

    if(horas < 10) { horas = "0" + horas; }
    if(minutos < 10){ minutos = "0" + minutos; }
    if(segundos < 10){ segundos = "0" + segundos; }

    laHora.innerHTML = horas + ":" + minutos + ":" +segundos;

}

function reiniciarCrono(){
    //inicializar tiempo a 0
    miFecha.setHours(0, 0, 0, 0);

    //Inicializar laHora
    laHora.innerHTML  = "00:00:00";
}

function startCrono(){
    elCrono = setInterval(crono, 1000);
    
}

function stopCrono(){
    clearInterval(elCrono);
}

function resetCrono(){
    setTimeout(reiniciarCrono, 0);
}