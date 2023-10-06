/*
    Calcular la mitjana en els anys 2010,2015,2020 --> la media i si son superors a 30ªC en els mesos de juny, juliol, agos
*/

//Declaracio de variables
//2010
let any2010Juny = 25.8;
let any2010Juliol = 28.6;
let any2010Agost = 30.1;

//2015
let any2015Juny = 26.5;
let any2015Juliol = 29.3;
let any2015Agost = 30.5;

//2020
let any2020Juny = 27.2;
let any2020Juliol = 29.9;
let any2020Agost = 31.5;

//Calcul mitjana any
let mitjanaAny2010 = (any2010Agost + any2010Juliol + any2010Juny) / 3;
let mitjanaAny2015 = (any2015Agost + any2015Juliol + any2015Juny) / 3;
let mitjanaAny2020 = (any2020Agost + any2020Juliol + any2020Juny) / 3;

//Mitjana superior a 30?
let superatAny2010 = mitjanaAny2010 > 30;
let superatAny2015 = mitjanaAny2015 > 30;
let superatAny2020 = mitjanaAny2020 > 30;

//Operadors ternaris per calcular si les mitjes son superiors a 30ºC
let superat30Any2010 = (superatAny2010) ? 'La mitja de 2010 es superior a los 30ºC' : 'La mitja en 2010 es inferior a los 30ºC';
let superat30Any2015 = (superatAny2015) ? 'La mitja de 2015 es superior a los 30ºC' : 'La mitja en 2015 es inferior a los 30ºC';
let superat30Any2020 = (superatAny2020) ? 'La mitja de 2020 es superior a los 30ºC' : 'La mitja en 2020 es inferior a los 30ºC';

console.log(superat30Any2010);  //Resultat del operador ternari, mira si es superior a 30 i torna el resultat
console.log(superat30Any2015);
console.log(superat30Any2020);

//Convertir temperatura mitjana a fahrenheid i Kelvin
console.log('Temperatures mitjes en els anys');
let mitjanaAny2010Fahrenheit = (mitjanaAny2010 * 9/5) + 32;
let mitjanaAny2010Kelvin = mitjanaAny2010 + 273.15;
 
//Mostrar per pantalla temperatura mitja de 2010 en ºC, ºF, K
console.log('   Temperaturas 2010');
console.log('Temperatura mitja en 2010 en ºC: '+mitjanaAny2010);
console.log('Temperatura mitja en 2010 en ºF: '+ mitjanaAny2010Fahrenheit);
console.log('Temperatura mitja en 2010 en K: ' + mitjanaAny2010Kelvin);

let mitjanaAny2015Fahrenheit = (mitjanaAny2015 * 9/5) + 32;  //De ºC a ºF
let mitjanaAny2015Kelvin = mitjanaAny2015 + 273.15;          //De ºC a K

//Mostrar per pantalla temperatura mitja de 2015 en ºC, ºF, K
console.log('   Temperaturas 2015');
console.log('Temperatura mitja en 2015 en ºC: '+mitjanaAny2015);
console.log('Temperatura mitja en 2015 en ºF: '+ mitjanaAny2015Fahrenheit);
console.log('Temperatura mitja en 2015 en K: ' + mitjanaAny2015Kelvin);

let mitjanaAny2020Fahrenheit = (mitjanaAny2020 * 9/5) + 32;
let mitjanaAny2020Kelvin = mitjanaAny2020 + 273.15;

//Mostrar per pantalla temperatura mitja de 2020 en ºC, ºF, K
console.log('   Temperaturas 2020');
console.log('Temperatura mitja en 2020 en ºC: '+mitjanaAny2020);
console.log('Temperatura mitja en 2020 en ºF: '+ mitjanaAny2020Fahrenheit);
console.log('Temperatura mitja en 2020 en K: ' + mitjanaAny2020Kelvin);
