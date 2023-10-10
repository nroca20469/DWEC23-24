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



//09/10/2023
//FECHAS
let parrafo = document.getElementById("fecha");  
//parrafo.innerHTML = "Hola";  //Mostrara por pantalla el string hola por la propiedad innerHTML

//new Date();
//new Date(milisegundos);
//new Date(fechaString);
//new Date(año, mes, dia, horas, minutos, segundo, milisegundos);

//parrafo.innerHTML = Date();

let fecha = new Date(92500000); //En milisegundos
fecha = new Date('12/15/2023');  //En string  , formato corto
fecha = new Date('Aug 16 2000');   //Formato largo
fecha = new Date('Wed Aug 16 2000 00:00:00 GMT+0200 (hora de verano de Europa central)');  //Formato completo
fecha = new Date('2003-08-25');  //Formato ascii
fecha = new Date(70,11,29,15,15,0,0);


//Metodos
parrafo.innerHTML = fecha.getDate();          //Dia del mes 1-31
parrafo.innerHTML = fecha.getDay();           //Dia de la semana en formato numerico 0-6
parrafo.innerHTML = fecha.getFullYear();      //Obtiene el anyo 
parrafo.innerHTML = fecha.getHours();         //Obtiene las horas
parrafo.innerHTML = fecha.getMilliseconds();  //Obtiene los milisegiundos
parrafo.innerHTML = fecha.getMinutes();       //Obtiene los minutos
parrafo.innerHTML = fecha.getMonth();         //Obtiene el mes(numerico)
parrafo.innerHTML = fecha.getSeconds();       //Obtiene los segundos
parrafo.innerHTML = fecha.getTime();          //Obtiene el numero de milisegundos desde 01-01-1970 i 1h(aprox)