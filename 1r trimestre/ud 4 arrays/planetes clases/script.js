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

//Crear clase
class Planeta {
    constructor(nombre, distanciaSol, tamañoRelativoTierra, fechaDescubrimiento){
        this.nombre = nombre;
        this.distanciaSol = distanciaSol;
        this.tamañoRelativoTierra = tamañoRelativoTierra;
        this.fechaDescubrimiento = fechaDescubrimiento;
    }

    informacion(){
        console.log(`Nombre del planeta:  ${this.nombre} \nDistancia del sol: ${this.distanciaSol} \nFecha del descubriemiento:  ${this.fechaDescubrimiento} `);
    }
};

//Crear arrays con informacion de los planetas
const nombres = ["Mercurio", "Venus", "Marte", "Júpiter", "Saturno"];
const distanciaDelSol = [1500.0, 108, 228, 750, 1418];
const tamanoRelativo = [0.38, 0.95, 0.53, 11.2, 94.5];
const fechaDesc = [1693, 1610, 1610, 1973, 1610];

//Crear arrays para los planetas
const arrayPlanetas = new Array(5);

//Passar classes a array de planetas
for (let i = 0; i < arrayPlanetas.length; i++) {
    let planetaY;
    if(fechaDesc[i] > 1970){  //If else para guardar las fechas de descubrimiento, ya que son menores a 1970, no se leen bien
        planetaY = new Planeta(nombres[i], distanciaDelSol[i], tamanoRelativo[i], fechaDesc[i]);
    } else {
        fechaDescubrimiento = new Date('10/23/2023');
        planetaY = new Planeta(nombres[i], distanciaDelSol[i], tamanoRelativo[i], fechaDescubrimiento.getFullYear());
    }
    arrayPlanetas[i] = planetaY;  //Guardar planetaY en la posicion i del array
}

console.log('           Array de planetas:');
//Leer array de planetas
for (let i = 0; i < arrayPlanetas.length; i++) {
    arrayPlanetas[i].informacion();  //Lectura de informacion
}


//Leer array de planetas ordenado
console.log('           Array de planetas ordenado:');

let arrayOrdenado = arrayPlanetas.sort((a,b) => {  //Ordenacion de arrayPlanetas
    return a.distanciaSol - b.distanciaSol;  
})

//Mostrar por pantalla
for (let i = 0; i < arrayPlanetas.length; i++) {
    arrayPlanetas[i].informacion();  //Lectura de informacion   
}