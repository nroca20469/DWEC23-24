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

//11/10/2023
//POP() --> elemina el ultimo elemento del array y lo DEVUELVE
let paco = ['Joan', 'Amparo', 'Ester'];
console.log(paco);
//let elementoEliminado = paco.pop();
//console.log(paco);
//console.log(elementoEliminado);

//SHIFT() --> elimina el primer elemento y lo DEVUELVE
let elementoEliminado = paco.shift();
console.log(elementoEliminado);
console.log(paco);

//UNSHIFT() --> agrega uno o mas elementos al PRINCIPO
//paco.unshift('Valentin', 'Pepe');
console.log(paco);

//CONCAT() --> combina dos o mas arrays y develve un NUEVO array
let otros = ['Valentin', 'Pepe'];
let combinacion = paco.concat(otros)
console.log(combinacion);
console.log(otros.concat(paco));

//SLICE() --> devuelve una copia(superficial) de un porcion del array
let copiaPaco = paco.slice(0, 2);
copiaPaco = paco.slice(0);
console.log(copiaPaco);

//SPLICE() --> cambia el contenido de un array eliminando, reemplazando o agregando
paco.splice(1, 2, 'Valentin', 'Pepe');
console.log(paco);
paco.splice(2,1);
console.log(paco);
paco.splice(2, 0, ...otros);
console.log(paco);
paco.splice(2, 0, ...otros.splice(1, 0, 'Ester'));  //No funcifona
paco.splice(2, 0, ...(otros.splice(1, 1, 'Ester')), ...otros.splice(0,1));
console.log(paco);

//INDEXOF() --> devuelve el 1r indice en el que se encuentra un elemento dado. DEVUELVE -1, si no lo encuentra
let indice = paco.indexOf('Ester');
console.log(indice);
indice = paco.indexOf('ester');
console.log(indice);
let cadena = "Hola cara de bola";
indice = cadena.indexOf("o");  //Trata a las cadenas(strings) como arrays
console.log(indice);

//LASTINDEXOF() --> ultima coincidencia
indice = cadena.lastIndexOf("a");
console.log(indice);
indice = paco.lastIndexOf('Ester');
console.log(indice);

//JOIN() --> une todos los elementos de un array en una cadena (utilizando un separador especificado)
let joinCadena = paco.join(", "); 
console.log(joinCadena);

//SORT() --> orderna los elementos de un array alfabeticamente si son cadenas i numericamente si son numeros
otros = [3, 4, 10, -1, 0];
console.log(paco.sort());
console.log(otros.sort());
let mixto = [...paco, ...otros, true, false, 'Zoraida', 'Barbara'];
console.log(mixto.sort());
mixto = [...paco, true, false, 'zoraida', 'barbara']
console.log(mixto);

//Utilizar correctamente SORT() => uso de parametro, es una funcion:  (1) Debe recibir dos valores a comparar
        // Como resultado debe:
            //(1) Devolver un valor positivo(1) -> Si el primer valor pasado a la funcion es superior al segundo
            //(2) Devolver un valor negativa(-1) -> Si el primer valor es inferior la segunfo  
            //(3) Devolver un valor zero(0) -> Si los dos valores son iguales o equivalentes para la ordenacion

    //Sort en numeros
        let numeros = [10, 5, 8, 3, 1];
        console.log(numeros.sort(function(a,b) {  //Solo se pueden pasar dos parametros, funcion llamada anonimas
             return a-b;
        }));

        console.log(numeros.sort((a,b) => a - b ));  //En funcion flecha
        
    //Sort en cadenas
        let cadenas = [...paco, 'zoraida', 'valentin'];
        console.log(cadenas.sort((a, b) => {
            return (a.toLowerCase() > b.toLowerCase()) ? 1 : 
            (a.toLowerCase() < b.toLowerCase()) ? -1 : 0;
        }));    
    
        console.log(cadenas.sort((a,b) => {
            return a.localeCompare(b);
        }));


//16/10/2023
//FUNCIONES --> encapsular codigo y poder reutilizarlo tmb llamados metodos, no tienen pq devolver nada. Puede aceptar parametros o no
//diHola();
function diHola(){
    console.log("Hola");
}

//diHola();  //Llamar funcion para inicializarla, por asi decirlo, para que se ejecute el codigo

function multiplica(c){
    let a = 10;
    let b = 20;
    console.log(a * b * c);
}
multiplica(3);

//Funciones pueden hacer return

function multiplica2(c, d){
    let a = 10;
    let b = 20;
    return (a * b *c * d);
}
let resultado = multiplica2(3, 10);
console.log(resultado + 1);

//OBJETOS -->  almacenar multiples valores, principalmente relacionados entre si, podemos tener propiedades(clave/valor) i funciones/metodos propios
    //Las claves de propiedades del objeto, pueden ser cadenas de texto o bien, un identificador valido para JS
    //En las claves, podemos omitir las comillas(hay exceppciones)
        //Salvo cuando, necesitemos utilizar caracteres no ASCII, caracteres especiales, espacios en blanco, etc.

let unCliente = {  //Buena practica(salto de carro(ENTER))
    nombre: "Peter",
    apellido: "Jackson",
    "direccion fiscal": "calle 8",
    "-+-+-+": "boquepasa",
    pago: {
        tipo: "Visa",
        tarjeta: "123456789",
        "fecha de caducidad": "nunca"
    },
    vencimiento: 30
} 
console.log(unCliente);
//Acceder a objetos
//Modificar valor del objeto
    //1) 
        unCliente["vencimiento"] = 60;
        console.log(unCliente["pago"]["tipo"]);
        console.log(unCliente["nombre"]);
    //2)
        unCliente.apellido = "Garcia";  //Solo sirve en los nombres unicos, con caracteres especiales, hay que utilizar la 1
        console.log(unCliente.apellido);
        console.log(unCliente.pago.tarjeta);
        console.log(unCliente.pago["fecha de caducidad"]);

//JSON--> elemtentos de un mismo objeto puede tener numeros, cadenas, booleanos, arrays, otro objetos y funciones --> puede llegar a ser muy complejo, por las anidaciones
//Metodos como datos(propiedades/elementos)

let estudiante = {
    id: 2,
    nombre: "Joan",
    diAdeu : function() {
        return "Adeu";
    },
    notas: [10 , 0, 4],

}

estudiante.apellido = "Melsion";
estudiante.diHola = function(){
    return "Hola";
}
console.log(estudiante.apellido); 
console.log(estudiante.diHola());
console.log(estudiante.diAdeu());
console.log(estudiante.notas[2]);
//MINIFUNCION da media, 
//El alumno x saluda y tiene las notas

let estudiante2 = {
    id: 2,
    nombre: "Joan",
    diAdeu : function() {
        return "Adeu";
    },
    notas: [10 , 0, 4],
    mediaNotas: function() {
        let sumaNotas = 0;
        let array = estudiante.notas;
        for(let i = 0; i < array.length; i++){
            sumaNotas += array[i];
        }
    
        let mitja = sumaNotas / array.length;
        return mitja;
    }
}
console.log(estudiante2.mediaNotas());
console.log("El estudiante " + estudiante2.nombre + " dice " + estudiante2.diAdeu() + " porque su media de notas es " + estudiante2.mediaNotas(estudiante2.notas));


//Uso de palabra clave this --> al objeto actual
let factura = {
    descripicon: "Factura de prueba",
    precio: 100.0,
    iva: 21.0,
    subtotal: function(){
        return this.precio;
    },
    total: function() {
        return this.precio + (this.precio * this.iva) / 100;
    }
}

console.log(factura);
console.log(factura.subtotal());
console.log(factura.total());


// CONSTRUCTORES  --> funcion q empieza por MAYUSCULA
function Web() {
    this.url = "http://localhost";
    this.nombre = "LocalHost";

    this.muestraInformacion = function() {
        return "URL: "+ this.url + "\n" + "Web: " + this.nombre;
    }
}

let unaWeb = new Web();
unaWeb.url = "https://www.fcbarcelona.cat";
unaWeb.nombre = "Mas que un club";
console.log(unaWeb); //Si no se le assigna nada, se le assignan los valores por defecto
console.log(unaWeb.muestraInformacion());

let otraWeb = new Web();
otraWeb.nombre = "Google";
otraWeb.url = "http://www.google.com";
console.log(otraWeb.muestraInformacion());
console.log(otraWeb);

Web.visitas = 2;
console.log(unaWeb.visitas);
console.log(Web.visitas);

Web.miFuncion = function() {
    return "Hola";
}

//console.log(unaWeb.miFuncion());
console.log(Web.miFuncion());

//Prototype --> todas las funciones y objetos lo tiene
Web.prototype.visitas = 2;
Web.prototype.miFunction = function() {
    return "Hola";
}

console.log(unaWeb.visitas);