
//Crear array de multiplicaciones  + llenar array
let tablaMultiplicar = new Array(10);
for(let fila = 0; fila < tablaMultiplicar.length; fila++){
    tablaMultiplicar[fila] = new Array(10);
    let arrayIndividual = tablaMultiplicar[fila];
    for(let col = 0; col < arrayIndividual.length; col++){
        arrayIndividual[col] = col*fila;  //Multiplicar columnas * filas
    }
}

//Mostrar el array i filtrar
let tablaX = "";
for(let fila = 0; fila < tablaMultiplicar.length; fila++){
    tablaX = "";
    for(let col = 0; col < tablaMultiplicar[fila].length; col++){
        if(tablaMultiplicar[fila][col] % 2 === 1){   //Filtrar
            tablaX += tablaMultiplicar[fila][col] + " ";
        }
    }

    if(tablaX){  //Mostrar
        console.log('Tabla del ' + fila  + ": " + tablaX);
        //console.log(tablaX);
        
    }
}