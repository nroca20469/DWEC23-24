//ESTRUCTURAS DE CONTROL --> Se utilizan para controlar el flujo de un programa

//IF --> utiliza para ejecutar un bloque de codigo si se cumple una condicion() i el bloque{}
let edad = 18;
if(edad >= 18) {
    console.log("Es mayor de edad");
}
//!!--> {}
/*
1.- {}
    if(edad >= 18) 
    {
        console.log("Es mayor de edad");
    }
2.-Boleano
    let mayorEdat = edad >= 18
    if (mayorEdat){
        console.log("Es mayor de edad");
    }
3.- unica linea
      if(edad >= 18)  console.log("Es mayor de edad");
*/

//IF-ELSE F-ELSE
if(edad >= 18) {
    console.log("Eres mayor de edad");
} else if (edad > 12){
    console.log('Adolescente');
} else if (edad > 5) {
    console.log('Estas en primaria');
} else {
    console.log('Eres un bebe');
}

//TERNARIOS 
let a = 10;
let b = 10;
let resultado2 = (a > b)? (a - b) : (b - a); //+ 1;
console.log(resultado2);

let esMayorEdad = (edad >= 18);
let resultado = esMayorEdad ? 'Eres mayor de edad' : 'Eres menor de edad';
console.log(resultado);

//SWITCH - CASE --> usar cuando se quiera hacer una estructura condicional segun el valor que tenga una variable o expression

let nombre = "Frodo";
let edat;
switch (nombre) {
    case "Gandalf":
        edat = 1230;
        break;

    case "Aragorn":
        edat = 532;
        break;

    case "Frodo":
        edat = 50;
        break;

    default:
        edad = -1;
        break;
};

console.log("Nombre: " + nombre, "Edad: " + edat);


//ITERACIONES / BUCLES --> se utilizan para repetir una porcion de codigo varias veces 

//WHILE -->  repetir un bloque{} mientras se cumpla una condicion

let contador = 0;
 
while (contador < 5){
    console.log(contador);
    contador++;
    contador = 5;
}
console.log('Ja ha acabat');

//DO WHILE --> repetir un bloque de codigo, al menos una vez
console.log('do-while');
contador = 20;
do {
    console.log(contador);
    contador--;
} while (contador > 10)

//FOR --> repetir un bloque de cofigo un numero especifico de veces
//Controlar mas este bucle--> break(detener la ejecucion del bucle) / continue(stop-and-go, saltar a la siguiente iteracion)
console.log('for');
for(let i = 0; i < 5; i++){
    console.log(i);
}

console.log('for break');
for(let i = 0; i < 5; i++){
    if(i == 2){
        break;  //Detener el bucle cuando sea dos
    }
    console.log(i);
}

console.log('for continue');
for(let i = 0; i < 5; i++){
    if(i == 2){
        continue;  //Salta a la siguiernte iteracion
    }
    console.log(i);
}

