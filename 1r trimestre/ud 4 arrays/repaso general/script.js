//18/10/23

const ciudades = [
    {
        municipio: "Zaragoza",
        provincia: "Zaragoza"
    },
    {
        municipio: "Avila",
        provincia: "Avila"
    },
    {
        municipio: "Madrid",
        provincia: "Madrid"
    },
    {
        municipio: "Barcelona",
        provincia: "Barcelona"
    }
];
console.log(ciudades);
console.log(ciudades.sort());

function ordenarPorFavor(a, b)  {
    return a.provincia.localeCompare(b.provincia);
};

ciudades.sort((a, b) => {
    return a.provincia.localeCompare(b.provincia);
});

console.log(ciudades);

//Las constantes arrayes no son iguales que las constantes de variables simples, se pueden añadir cosas en los arrays, pero no podemos canviar 
//valor de las constantes simples
const miArray = ["A", "b", "C"];
miArray.push("d");
console.log(miArray);

miArray[0] = "0"; //Cuidado con los arrays constantes
console.log(miArray);

//DESTRUCTURACION --> cada uno de los valores de un array caiga en una variable 
const numeros = [1, 2, 3, 4];

const [a, b, c] = numeros; //En caso de tener un valor de mas, este passa olimpicamente de este
                            //En caso de un valor menos, esta constante sera nula

console.log(c);

//DESETRUCTURAR OBJETOS
const persona = {
    nombre: "Andreu",
    edad: 33
}

const {nombre, edad} = persona; //Para que funcione en objetos, debera tener el mismo nombre
console.log(nombre);

//Definir palabras con variables para definir variables i ponerlo dentro de un objeto
const nombre2 = "Josep";
const edad2 = 33;

const persona2 = {
    nombre2,
    edad2
}

console.log(persona2);

//Template Strings - Plantillas de cadenas
//Operador de interpolacion ${} --> guardar el valor i usando ir cambiando las variables
        //Importante usar el accento abierto ``
const nombre3 = "Bob";
const edad3 = 32;

const mensaje = `Hola, mi nombre es ${nombre3} y tengo ${edad} años.`;
console.log(mensaje);

//Operador spread ... --> añade elemento a elemento
const numeross = [1, 2, 3];
const numeross2 = [...numeross, 4, 5];
console.log(numeross2);

//Parametros por defecto --> ES6 
function saludar(nombre = "Invitado") {  //Asi se da un valor por defecto
    console.log(`Hola, ${nombre}`);
}

saludar("Joan");
saludar();

//Parametros rest (rest parameter) --> capturar un numero de variable en un argumento o una funcion, lo trata como array, Pasar varios parametros en uno solo
function sumar(...numeros){
    let resultado = 0;

    for (let numero of numeros) {
        resultado += numero;
    }
    
    return resultado;
}

console.log(sumar(5, 4, -1, 6, 3, 65, 1001, -666));



//FUNCIONES FLECHA() => {}

function sumarA(a, b) {
    return a + b;
}

const sumarB = (a, b) => a + b;   //Fucnion flecha en una sola linia para un return
console.log(sumarB(2, 4));

const sumarRest = (...numeros) => {
    let resultado = 0;
    
    for (let numero of numeros) {
        resultado += numero;
    }
    
    return resultado;
}

console.log(sumarRest(1, 4, 5, 3));

//METODOS DE ARRAY DE ES6

//FOREACH()  --> Ejecuta una funcion(nuestra) una vez por cada elemeto del array 
const num = [1, 2, 3, 4, 5];

const multiplica = (n) => {
    return n * 2;
}

num.forEach((numero) => {
    console.log(numero);
});

num.forEach((numero) => console.log(multiplica(numero)));

console.log(numeros);

//MAP() --> crea un nuevo array(no modifica), con lso resultados de aplicar una funcion a cada elemento del array
const dobleNumero = numeros.map((numero) => {
    return multiplica(numero);
})

console.log(numeros);
console.log(dobleNumero);

//FILTER() --> Crea un nuevo array con todos los elementos que cumpplan una condicion determinada
const numerosPares = numeros.filter((numero) => {
    return numero % 2 === 0;
});

console.log(numerosPares);

const numerosMayores2 = numeros.filter((numero) => {
    return numero > 2;
});

console.log(numerosMayores2);

//REDUCE() --> Aplica una funcion a un acumulador y a cada elemento del array
    //De izquierda a derecha, para reducirlo a un UNICO valor

const sumarC = numeros.reduce((acumulador, numero) => {
    
    return acumulador + numero;
}, 0);

console.log(sumarC);


//FIND() --> devuelve el primer elemento del array que cumpla una determinada condicion
const numeroEncontrado = numeros.find((numero) => {
    return numero < 3;
});

console.log(numeroEncontrado);

//FINDINDEX() --> devuelve el indice del primer elemento del array que cumple con una funcion de prueba
// o retornara -1 si no encuentra nada
const indiceEncontrado = numeros.findIndex((numero) => {
    return numero < 3;
});

console.log(indiceEncontrado);

//SOME() --> Comprueba si al menos un elemento del array cumple una condicion determinada
const tieneNumeroPar = numeros.some((numero) => {
    return numero % 2 === 0;
});

console.log(tieneNumeroPar);

if( numeros.some((numero) => {
    return numero % 2 === 0;
})){
    console.log('fungiciona');
}

//EVERY() --> Comprueba si TODOS los elementos cumplen una condicion determinado
const todosNumerosPares = numeros.every((numero) => {
    if(numero > 3){
        return numero % 2 === 0;
    } else {
        return numero % 2 === 1;
    }
    
});

console.log(todosNumerosPares);


//23/10/2023
