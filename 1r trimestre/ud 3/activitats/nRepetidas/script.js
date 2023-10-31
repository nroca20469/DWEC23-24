//Creacion de variables
const numero = prompt("Elige un numero de 4 cifras");
console.log(numero);

//Passar a array
let arrayNumerica =  [...numero];  
arrayNumeros = arrayNumerica.map(Number);  //--> Passar a numeros

let arrayOrdenado = arrayNumeros.sort();
console.log(arrayOrdenado);

let numeroAux = 0; // arrayOrdenado[0];
let repetidos = 0;
for(let i = 0; i < arrayOrdenado.length; i++){
    if(numeroAux == arrayOrdenado[i]){
        repetidos++;
    } else if(numeroAux == arrayOrdenado[i - 1]){
        repetidos++;
    }else{
        numeroAux = arrayOrdenado[i]
    }
}

console.log(repetidos);

repetidos = 0;
for(let i = 0; i < arrayOrdenado.length; i++){
    for (let j = i + 1; j < arrayOrdenado.length; j++) {
       if(arrayOrdenado[i] == arrayOrdenado[j] && i != j){
            repetidos ++;
       } 
        
    }
}

console.log(repetidos);