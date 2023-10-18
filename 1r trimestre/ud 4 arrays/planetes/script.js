/*Objeto planeta con: 
    - Distancia al sol
    - Tamaño relativo(a la tierra)
    - Fecha de descubrimiento

Array para almacenar los plalnetas

Mostrar info de -->
    - 5 planetas
    - Constructor Planeta(propiedades, metodos)
    - Planeta se crea a partir de un array en el bucle
    - Funcion para mostrar info del planeta
    - utilizar clase Date() para trabajas con fechas
    - Metodo de arrays para ordenar los planetas por distancia del SOL(de menor a mayor) y mostrar info por consola
*/

//Crear constructor:
function Planeta() {
    this.nombre = "";
    this.distanciaSol = "";
    this.tamañoRelativoTierra = "";
    this.fechaDescubrimiento = new Date();
    this.informacion = function() {
        return ("Nombre del planeta:  " + this.nombre + "\nDistancia del sol:  " + this.distanciaSol + "\nFecha del descubriemiento:  " + this.fechaDescubrimiento.getFullYear()); 
    }
    
}


//Crear array de toda la informacion a utilizar(5)
const nombres = ["Mercurio", "Venus", "Marte", "Júpiter", "Saturno"];
const distanciaDelSol = [58.0, 108, 228, 750, 1418];
const tamanoRelativo = [0.38, 0.95, 0.53, 11.2, 94.5];
const fechaDesc = [1693, 1610, 1610, 1973, 1610];

//Crear array de Planetas
let arrayPlanetas = new Array(5);

//Creacion i dar propiedades a los planetas
for(let i = 0; i < arrayPlanetas.length; i++) {
    let planetaX = new Planeta();
    planetaX.nombre = nombres[i];
    planetaX.distanciaSol = distanciaDelSol[i];
    planetaX.tamañoRelativoTierra = tamanoRelativo[i];
    if(fechaDesc[i] > 1970){
        planetaX.fechaDescubrimiento = new Date("'" + fechaDesc[i] + "'");
    } else {
        planetaX.fechaDescubrimiento = new Date('10/17/2023');
    }
    arrayPlanetas[i] = planetaX;
    
}    
//Lectura de los planetas de forma orden del array
console.log("   Array de planetas   ");
for (let i = 0; i < arrayPlanetas.length; i++) {
    console.log(arrayPlanetas[i].informacion());
    
}

console.log(arrayPlanetas);

//FALTA ORDENARLOS