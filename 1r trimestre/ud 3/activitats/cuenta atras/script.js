let cuentaAtras;
let miFecha = new Date();
let cuentaDiv = document.getElementById('cuenta')

miFecha.setHours(0,0,5,0);
cuentaDiv.innerHTML = "00:00:05";

function cuenta(){
    let horas = miFecha.getHours();
    let minutos = miFecha.getMinutes();
    let segundos = miFecha.getSeconds();

    if(minutos == 0 && horas == 0 && segundos == 0) {
        clearInterval(cuentaAtras);
        cuentaDiv.innerHTML = '00' + ":" + '00' + ":" + '00';

    } else {
        if(minutos == 0 && segundos != 0 && horas != 0){
            minutos = 60;
            horas -= 1;

            miFecha.setHours(horas);
        }

        if(segundos == 0 && minutos != 0 && horas != 0 ){
            minutos -= 1;
            segundos = 60;
            miFecha.setMinutes(minutos); 
        }

        segundos -= 1;  

        if(horas < 10) { horas = "0" + horas; }
        if(minutos < 10){ minutos = "0" + minutos; }
        if(segundos < 10){ segundos = "0" + segundos; }

        miFecha.setSeconds(segundos);
        cuentaDiv.innerHTML = horas + ":" + minutos + ":" +segundos;

    }
    
}

function start(){
    cuentaAtras = setInterval(cuenta, 1000);
}

function stop(){
    clearInterval(cuentaAtras);
   // cuentaDiv.innerHTML = "00:00:05";
}

function restart(){
   setTimeout(reiniciar, 0)
}

function reiniciar(){
     cuentaDiv.innerHTML = "00:00:05";
    miFecha.setHours(0,0,5,0);
}