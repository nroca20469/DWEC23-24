//Creacion de variables
const numero = prompt("Elige un numero de 4 cifras");  //Pedimos por pantalla un numero de 4 cifras
let arrayNumeros = new Array(4);  //Creamos un array para los numeros
let intentos = 0;  //Numero de intentos
let contadorRepetida = 0; //Contar las veces que se repite un numero

while((numero > 1000 && numero < 10000) && intentos < 8){  //Assegurar  que el numero es de 4 cifras  --> I SI EMPIEZA POR 0??
   
    //Passar numero a un array
    let arrayNumerica =  [...numero];   // --> Passar a array
    arrayNumeros = arrayNumerica.map(Number);  //--> Passar a numeros

    //Ordenar array, de forma ascentende y descendente
    let arrayOrdenado = ordenar(arrayNumeros);
    let arrayOrdenadoAlReves = desordenar(arrayOrdenado);
    
    //Buscar si hay un numero que se repita x veces
    for(let i = 0; i < arrayOrdenado.length; i++){
        for (let j = i + 1; j < arrayOrdenado.length; j++) {
            if(arrayOrdenado[i] == arrayOrdenado[j] && i != j){
                contadorRepetida ++;
            } 
            
        }
    }

    console.log("Contador = " + contadorRepetida);
    
    //Si hay mas de dos veces repetido el mismo numero
    if(contadorRepetida > 1) {  //Que hay mas de 2 numeros repetidos
        intentos = 8;  //Saldra del while y dara error despues de que el numero esta repetido
   
    } else {

        //Bucle para que se repita el numero de intentos necessario
        while(intentos < 8) {
            let numeroPrimero = arrayNumeros.join("");   //Passar a string
            numeroPrimero = parseInt(numeroPrimero);     //Passar a numero

            let arrayOrdenado = ordenar(arrayNumeros);   //Ordenar el array de numeros de forma ascendente
            let arrayOrdenadoAlReves = desordenar(arrayOrdenado);  //Ordenar de forma descendente
            console.log(arrayOrdenadoAlReves);

            let numero = restarNumeros(arrayOrdenadoAlReves, arrayOrdenado);

            if(numeroPrimero == numero) {
                let victoria = document.getElementById('textoVictoria');
                victoria.innerHTML = "Ya ha acabado y ha funcionado correctamente <br><br> Numero de intentos: " + intentos + "<br> El numero final es: " + numero;
        
                intentos = 8;
            }

            let restant = "\"" + numero + "\"";  //Passamos a string pq no nos deja passarlos directamente a array
    
            arrayNumeros =  [...restant];  //Passamos a array
            arrayNumeros = arrayNumeros.map(Number);    //Pasamos a numero
            arrayNumeros.pop();   //Borramos la primera y la ultima posicion del array que es donde van las ""
            arrayNumeros.shift();
           
            intentos ++;  //Sumamos el intento(sino seria bucle infinito)
        }
    }
}

if(contadorRepetida > 1){   //Error de demasiadas letras repetidas(+2)
    let error = document.getElementById('textoError'); 
    error.innerHTML = "Su numero tiene mas de dos numeros repetidos";
} else if(numero < 1000 || numero > 10000){   //Error en que el numero no es de 4 cifras
    let error = document.getElementById('textoError');
    error.innerHTML = "Su numero no es de 4 cifras, recarga la pagina para volver a intentar";
} else if(intentos == 8) {  //Error por numero de iteraciones superada
    let error = document.getElementById('textoError');
    error.innerHTML = "Numero de iteraciones superado";
}


//FUNCIONES
//Ordenar el array de numeros
function ordenar(arrayNumeros){  return arrayNumeros.sort();   }

//Ordenar en de manera descendente el arrayOrdenado
function desordenar(arrayOrdenado){  return arrayOrdenado.slice().reverse();   } //Slice para copiar i luego revertir(sin cambiar el array original)

//Resta de numeros en arrays
function restarNumeros(arrayOrdenadoAlReves, arrayOrdenado){  //Necessitamos que tanto el array ordenado como el desordenado se resten
    let numero1; //Array ordenadoAlReves
    let numero2; //Array ordenado

    //Passar a numeros
    numero1 = arrayOrdenadoAlReves.join("");
    let numeroFinal1 = parseInt(numero1);

    numero2 = arrayOrdenado.join("");
    let numeroFinal2 = parseInt(numero2);

    //Restar los numeros con la funcion resta
    let restarNumeros = resta(numeroFinal1, numeroFinal2);

    return restarNumeros;
}

//Resta de 2 numeros
function resta(a, b) { return a - b;};