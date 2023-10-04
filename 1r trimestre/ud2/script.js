console.log(saluda());

function saluda(){
    console.log('Hi');
}

// Comentario corto
/* 
    Comentario largo
    xd 
*/

//VARIABLES --> almacenar datos(registro de algo que podemos percibir de qualquier cosa)
// Tipos de variables(declarar pero no tipificar)
// var, let, const
var nombre = "Nerea";  //Alcance exclusivo de funcion
let edad = "2";  //Alcance de bloque
const PI=3.15141692;
/* PI=3415;  DA ERROR
PI="HOLA";
*/
console.log(PI);

function patata(){
    console.log(nombre);
    console.log(edad);
}

patata();

let uno = 1; let dos = 2;
console.log(uno + dos);

//String(''/"") --> texto no caracter(no existe char)
let nom = "Joan";
let apellido = 'Melsion';
let nombreCompleto = "Joan Melsion, professor de DWEC";
let comillas = '"Hi"';
comillas = "\"Hi\"";
comillas = "'Hi'";
console.log(comillas);

//Numeros
let edat = -26;    //Esto es un numero
let anyos = "26";  //Esto es una cadena
console.log(typeof edat);
console.log(typeof anyos);

let masEdad = 66;
console.log(masEdad + edat);

let precio = 21.99;
console.log(typeof precio);

let aprobados = Infinity;  //Sigue siendo un numero
let suspendidos = -Infinity;

//NULL --> definido pero vacio o con valor null
let valor = null;
console.log(valor);  //Es un object

//Undefined --> ni siquiera ha sido definido
let algo;
console.log(typeof algo);  //Sale undefined

//NaN --> cuando queremos utilzar algo pero no represnta es un numero
let algo1 = "Algo" / 2;
console.log(algo1);
let miEdad = "22";
console.log(miEdad / 2);

//typeOf --> tipo q esta representando esa variabe
console.log(typeof miEdad);

//delete --> enteoria es para borrar variables, pero no siempre funcina(solo funcina en los objetos)
delete miEdad;
console.log(miEdad);

let persona = {
    nombre: "Joan",
    edad: 15
};
console.log(persona.edad);
delete persona.edad;
console.log(persona.edad);

//Booleanos --> true, false --> valores falsy(false) --> null, string vacio(""), undefined, 0, NaN
let messi = true;
let penaldo = false;
console.log(typeof messi);

let algo2;
if(algo2) {
    console.log('Hola');
} else {
    console.log('Adeu');
}

//Operadores aritmetricos --> matematicas, operaciones
// +  a + b
// -  a - b
// *  a * b
// /  a / b
// %  a % b (modulo)

// ++  incremento  a++, ++aç
let a = 4;
++a;
console.log(a);

// --  decremento a--, --a

// +=  suma y asigna  a += b;  // a = a + b
// -=  resta y assigna  a -= b;  // a = a - b
// *=
// /=

let ab = 4;
let b = 2;
let c = ab/=b;
console.log(c);
console.log(ab);

// %=  modula y assigna
// - cambio de signo   ab = 5 b = -a  b = -5

// 03/10/25

//Conversion de tipos
//  Cuando form es nuemrico JS lo guarda como string
//String --> Int
let aa = "5";
let bb = "6";
console.log(typeof aa, typeof bb);
console.log(aa + bb);
let cc = parseInt(aa);  //Pasa de string a int
console.log(typeof cc, typeof aa, typeof bb);
console.log(cc + parseInt(bb));

let dd = "4.52";
console.log(cc + parseFloat(dd));

console.log(aa + bb);  //Los originales no se han cambiado con el parseInt, parseFloat
let aaa = +aa;
let bbb = +bb;  //Convierte el numero automaticamente en entero i float
let ddd = +dd;
console.log(typeof aaa, typeof bbb, typeof ddd);
console.log(aaa + bbb + ddd);

console.log(+aa + +bb);
console.log(typeof aa, typeof bb, typeof dd);

//Operadores de comparacion  --> comparar dos/+ valores i devolver un resultado booleano
// > mayor que
console.log(4 > 5);
// < menor que 
console.log(4 < 5);
// >= mayor/igual que
console.log(5 >= 4);
// <= menor/igual que
console.log(5 <= 5);

// == igual que (a valor)
console.log("4" == 4);
// != desigual que/distinto que
console.log(5 != 4);

// === igual que(distinto entre numeros i cadenas), igual en valor i tipos que
console.log("2" === 2);
console.log(2 === 2);
// !=== desigual en valor i tipos que
console.log("2" !== 2);
console.log(2 !== 2);

//OPERADORES BOOLEANOS --> Permiten comparar expresiones booleanas, con las que se construyen 
//condiciones que se pueden abrigar en funciones, bucles, etc.

// &&(AND)  --> solo devuelve true cuando ambos operadores son true
/*
    true && true = true
    true && false = false
    false && true = false
    false && false = false
*/

// ||(OR) --> devuelve true si uno de los operadores es true
/*
    true || true = true
    true || false = true
    false || true = true
    false || false = false
*/

let aaaa = true;
let bbbb = false;
console.log(aaaa | bbbb);  //Sale en 1/0
console.log(aaaa & bbbb);

let cadena;
if(cadena != null && cadena.length > 0){
    console.log(cadena);
} else {
    console.log("La cadena esta vacia");
}

// ! NOT --> devuelve lo contrario al operando
/*
    !true = flase
    !false = true
*/
console.log(!aaaa);

/* 
    Se nos facilitan tres variables que contienen informacion sobre una ciudad.
    let esCapital; (boolean)
    let numerosCiudadanos; (int)
    let impuestoPorCiudadano; (float)

    - esCapital --> sera cierta si, solo si, la ciudad es capital
    - numerosCiudadanos --> es el nuemro de ciudadanos de esa ciudad
    - impuestoPorCiudadano --> es el impuesto medio mensual que paga un ciudadano de esa ciudad
    
    Para nosotros, una Metropolis sera una ciudad si bien, es una capital con mas de 100.000 ciudadanos o bien es una
    ciudad con mas de 200.000 ciudadanos y una renta media de 720.000.000 al año.

    Dad una expresion booleana con las tres variables de tal manera que sea cierta si, y solo si, la ciudad es una 
    Metropolis
*/
let esCapital = true;
let numerosCiudadanos = 2000000; 
let impuestoPorCiudadano = 200.75;

let esMetropolis = (esCapital == true && (numerosCiudadanos > 100000 && numerosCiudadanos < 200000)) || (numerosCiudadanos >= 200000 && 720000000 <= impuestoPorCiudadano*12*numerosCiudadanos)
console.log(esMetropolis);

