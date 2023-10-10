//ARRAYS --> guardar coleccion de elementos, mas flexible que en Java

//Como definir arrays:
let arrayVacio = [];  //Sin elementos
let arrayConElementos = [2, 3, 5, 7, 11, 13];    //Con elementos numericos
let arrayMiscelanea = [1.1, true, 'Hi', ];  //Con mezcla de tipos

//Los valores de los elementos, literales, no tiene pq ser constantes
let n = 1024;
n = 100;
n = 'a';
let tabla = [n, n + 1, n + 2, n + 3]; 
console.log(tabla);

console.log(arrayMiscelanea.length);

let contador = [1, , 3];
console.log(contador);  //El ultimo si acaba con coma no lo cuenta, pero en  estar en medio, lo dejamos vacio

//Operador SPREAD
let a = [1, 2, 3];
let b = [0, ...a, 4];  //1
console.log(b);
console.log(b.length);

//Hacer copia de un array
let original = [1, 2, 3, 4];
let copia = [...original, ...original, ...arrayMiscelanea];  //Amplia elemento a elemento
console.log(original);
console.log(copia);

copia = [...original];
console.log(copia);
console.log(copia[0]);
copia[0] = 3;
console.log(copia[0]);

let digitos = [..."0123456789ABCDEF"];   //Objeto iterable( un digito = nuevo espacio)
console.log(digitos);

//Constructor de Array
let aa = new Array();  //Array vacio
aa = new Array(10);  //Ahora tiene 10 espacios vacio
aa = new Array(1, 2, 4, 551, "prueba", true);
console.log(aa);

aa = new Array(10);
let bb = Array.of(10);  //Contructor .of  -->   para poner en el primer elemento

console.log("bb long", bb.length);
console.log([1, 2, 5].length);

aa[2] = 19;
console.log(aa[2]);
aa[2] = false;
console.log(aa[2]);

aa.push(5, 'hola', 'adios');
console.log(aa[aa.length-1]);

//10/10/2023
//DELETE
let array = [1, 2, 3];
console.log(array);
delete array[2]
console.log(array);

let i = 2;
if(array[i]){
    console.log(array[i]);
} else {
    console.log("Slot vacio");
}

//Iterar arrays
let letras = [..."Hola amigos"];
console.log(letras);
let aux = "";
 //For
 for(let letra of letras){
    aux += letra;
 }

console.log(aux);
aux = "";
let suma = 0;
for(let [index, letra] of letras.entries()){   //Crea iteracion con llave, valor
    //aux += letra;
    //suma += index;
    if(index % 2 === 0) aux += letra;
}
console.log(aux);
// console.log(suma);

aux = "";
let mayusculas = "";
i = 0;
letras.forEach(letra => {
    if( i % 2 === 0){
        mayusculas += letra.toUpperCase();
    } else {
        mayusculas += letra;
    }
    i++;
})

console.log(mayusculas);

for(let j = 0; j < letras.length; j++){
    console.log(letras[j]);
}

//EXPRESIONES REGULARES
let letra = "";
let vocales = "";
for(let j = 0; j < letras.length; j++){
    letra = letras[j];
    if(/[aeiou]/.test(letra)){   //[] entre ests la coleccion que queremos comprovar
        vocales += letra;
    }
}
console.log(vocales);

// ARRAYS MULTIDIMENSIONALES --> arrays de dos o mas dimentsiones [1][2] o [1][2]...[n]
tabla = new Array(10);
for(let j = 0; j < tabla.length; j++){
    //console.log(tabla[j]);
//    tabla[j] = j * 2;
    tabla[j] = new Array(5);  //Cada fila va a tener 5 cols

}
console.log(tabla);

for(let fila = 0; fila < tabla.length; fila++){
    let miArrayInterior = tabla[fila];
    for(let col = 0; col < tabla[fila].length; col++){
        miArrayInterior[col] = fila*col;
    }
}
console.log(tabla);

/*Array multidimensional 
*/

let tablaMultiplicar = new Array(10);
for(let fila = 0; fila < tablaMultiplicar.length; fila++){
    tablaMultiplicar[fila] = new Array(10);
    let arrayIndividual = tablaMultiplicar[fila];
    for(let col = 0; col < arrayIndividual.length; col++){
        arrayIndividual[col] = col*fila;
    }
}

//console.log(tablaMultiplicar);
let tablaX = "";
for(let fila = 0; fila < tablaMultiplicar.length; fila++){
    tablaX = "";
    for(let col = 0; col < tablaMultiplicar[fila].length; col++){
        if(tablaMultiplicar[fila][col] % 2 === 1){
            tablaX += tablaMultiplicar[fila][col] + " ";
        }
    }

    if(tablaX){
        console.log('Tabla del ' + fila);
        console.log(tablaX);
        
    }
}