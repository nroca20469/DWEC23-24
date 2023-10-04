/*
    nota examen 1 --> nota * 0.2;
    nota examen 2 --> nota * 0.2;
    nota project --> nota * 0.6

    Declaracio variables
    - nomEstudiant
    - notaExamen1
    - notaExamen2
    - notaProjecte
    - notaFinal --> notaExamn1 + notaExamen2 + notaProjecte
*/

//Declaracio variables
let nomEstudiant = 'Joan';
let notaExamen1 = 8;
let notaExamen2 = 10;
let notaProjecte = 5.8;
let notaFinal = (notaExamen1 * 0.2) + (notaExamen2 * 0.2) + (notaProjecte * 0.6);

//Mostrar per pantalla els resultats
console.log('Nom Estudiant: ' + nomEstudiant);
console.log('Nota 1r Examen: ' + notaExamen1);
console.log('Nota 2n Examen: ' + notaExamen2);
console.log('Nota del Projecte: ' + notaProjecte);
console.log('Nota Final: ' + notaFinal);

//Aprovat?
if(notaFinal >= 7){
    console.log('Felicitats ' +nomEstudiant +'! Has aprovat el mòdul');
} else {
    console.log('Necessites millorar les notes per aprovar aques mòdul, ' + nomEstudiant);
}