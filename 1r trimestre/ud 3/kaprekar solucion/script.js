//Guardamos el numero de kaprekar
const numeroKaprekar = 6174;
//Numero entrado por el usuario
let numero;
//Passos realizados
let pasos = 0;

//Pedir al usuario que introduzca un numero y lo capturamos(Sera una cadena)
let promptText = "Eliga cualquier numero de 4 digitos ";
promptText += "que este formado de al menos dos digitos ";
promptText += "diferentes, incluido el cero.";

//Lanzamos el prompt
numero = prompt(promptText);

console.log(validarNumero(numero) ? "Es valido" : "No es valido");

if(!validarNumero(numero)) {
    console.log("El numero introducido no es valido.");
} else {
    while(numero != numeroKaprekar){
        
        //Llamamos a la funcion kaprekar.
        numero = kaprekar(numero);

        //Aumentamso el numero de pasos
        pasos++;

        //Evitar bucles inifinitos i/o innecesarios
        if(pasos > 8) {
            console.log('Numero de pasos superado, algo no esta bien');
            break;
        }

        //Si el numero obtenifo es el de Kaprekar, informamos de los pasos realizados
        if(numero == numeroKaprekar) {
            console.log("Pasos realizados: " + pasos);
        }

    }
}


/*Funcion que valida, comprobando que:
    - Sea un numero
    - No tenga mas de 4 digitos
    - Al menos 2 digitos diferentes
    - Un digito no se repita mas de dos veces
*/
function validarNumero(numero) {    
    
    //Que sea un numero
    if(numero == null || isNaN(numero)) {
        return false;
    } 

    //No mas de 4 numeros
    if(numero.length > 4) {
        return false;
    }

    /*if(+numero > 9999 || +numero <= 22){
        return false;
    }*/

    //Al menos dos digitos diferente
    const numeros = Array.from(String(numero), Number);  //Manera 1 para passar string a array numerico 
    console.log(numeros);

    const numeros2 = numero.split("");
    console.log(numeros2);

    const numeros3 = [...numero];
    console.log(numeros3);

    const setNumeros = new Set(numero);
   /* console.log(setNumeros); 

    if(setNumeros.size < 2){
        return false;
    }*/

    return true;
}


/* Funcion que realize las operaciones necessarias para obtener el numero de kaprekar pasandole como parametro el numero a tratar 
    Devuelve el numero obtenido*/
function kaprekar(numero){

    //Creamos un array para poder tratar el numero digito a digito
    let arrayNumero = new Array();
    
    //Variables para guardar los numeros a restar
    let mayor, menor;

    //Añadimos el numero al array
    /*for(let i = 0; i < numero.length; i++){  //Forma 1
        arrayNumero[i] = numero[i];
    }

    for (let i = 0; i < numero.length; i++) {  //Forma 2
        arrayNumero[i] = numero.charAt(i);
    }*/

    for (let i = 0; i < numero.length; i++) {
        arrayNumero.push(numero[i]);
        //O arrayNumero.push(numero.charAt(i))
    }

    //Ordenamos el array con sort --> quedara de menor a mayor
    arrayNumero.sort();

    //Guardamos en la variable "menor" el  del array "unido"
    menor = uneDigitos(arrayNumero);

    //Le damos la vuelta al array, y por lo tanto el numero
    //arrayNumero.reverse();
    arrayNumero = darleLaVuelta(arrayNumero);

    //Guardamos en la vriable "mayor" el contenido del array
    mayor = uneDigitos(arrayNumero);

    //Realizamos la resta
    numero = mayor - menor;
    console.log(mayor + " - " + menor + " = " + numero);

    return formaetaNumeroDeQuatroDigitos(numero.toString(),true);

}

//Une digitos y devuelve una cadena formada por los elementos del array passado por parametro, tomados como caracreers desde
//  el de menor indice hasta el ultimo
function uneDigitos(arrayNumeros){
    let cadena = "";

    for (let i = 0; i < arrayNumeros.length; i++) {
        cadena += arrayNumeros[i];
    }

    return cadena;
}

/* Devuelve un array con los elementos cambaidos simetricamente respecto al array passado por parametro */ 
function darleLaVuelta(arrayNumero){

    let arrayAuxiliar = new Array(arrayNumero.length);

    for (let j = 0; j < arrayNumero.length; j++) {
        arrayAuxiliar[arrayNumero.length - 1 - j] = arrayNumero[j]; 
    }

    return arrayAuxiliar;
    
}

/*
    Añade ceros delante o detras de una cadena 1ue representa un valor numerico
*/

function formaetaNumeroDeQuatroDigitos(numero, esIzquierda){
    if(esIzquierda) {
        if(numero.length == 3){
            numero = "0" + numero;
        } else if(numero.length == 2) {
            numero = "00" + numero;
        } else if(numero.length == 1){
            numero = "000" + numero;
        } 

    } else {
        if(numero.length == 3){
            numero = numero + "0";
        } else if(numero.length == 2) {
            numero = numero + "00";
        } else if(numero.length == 1){
            numero = numero + "000";
        } 
    }

    return numero;
}