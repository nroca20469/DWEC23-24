//UD 5: DOM & EVENTS
//13/11/2023

//DOM --> lo crea el navegador cuando carga la pagina web(no es la propia pagina) --> el navegador crea un objeta que modera ese documento --> document
// interacciona con html con JavaScript a traves del objeto document --> tiene propiedades i metodos

/* Arbol
HTML--> nodo raiz --> Head
                    |-> body  --> div1 --> p
                            |-> , div2 --> a
Cada cosa es un nodo*/

//SELECTORES:
//querySelector --> pide como paramentro --> un selector CSS
const para = document.querySelector('div.error');  //Puede ser una class, type, id  '.error', 'p', 'div.error' --> cogera el div de clase error
console.log(para);  //Siempre elegira el primer que sale
//const para2 = document.querySelector('body > h2');
const para2 = document.querySelector('body > h2:nth-child(2)');  //Elements --> Copy --> Copy selector
console.log(para2);

//Un pasito pa lante maria
//Capturar una coleccion de p's --> querySelectorAll  --> parametro --> selecotr CSS
const paras = document.querySelectorAll('p');
console.log(paras);
//console.log(paras[0]);
// paras.forEach( (para) => {
//     console.log(para);
// });


//Acceder a elementos del DOM
// getElementsById --> parametro no es un selector -> es el mnombre del identificador del elemento a buscar(ID)
const titulo = document.getElementById('titulo');
console.log(titulo);

//getElementsByClassName --> parametro es el nombre de la clase asociada a ese elemento que queremos encontrara (CLASS)
//Es una coleccion que no es nodelist --> es un HTML colection
const errors = document.getElementsByClassName('error');
console.log(errors);
console.log(errors[0]);  //No hacer foreach

//getElementsByTagName --> parametro es el nombre del tag del elemento
const parras = document.getElementsByTagName('p');
console.log(parras);
console.log(parras[0]);


//Añadir/Cambiar/Modificar el contenido de la pagina 
//innerHTML/innerText
//let para3 = document.querySelector('p');
let paras3 = document.querySelectorAll('p')
let contenidoP1 = paras3[0].innerText;
let para1 = paras3[0];
let conteidop1 = para1.innerText;
console.log(conteidop1);

para1.innerText = "Requete";
conteidop1 = para1.innerText;
console.log(conteidop1);


//Como obtener y establecer atributos --> cambiar propiedades como src, href
let enlace = document.querySelector('a');
let url = enlace.getAttribute("href");
console.log(url);

enlace.setAttribute('href', 'http://www.seat.es');
url = enlace.getAttribute('href');
console.log(url);


// Añador i eliminar estilos --> style
let error = document.querySelector('div.error');
error.style.backgroundColor = "lightblue";
error.style.backgroundColor = "";  //Borrar el color del fondo

// Añadir i eliminar clases de css
error.classList.add('paco');  //Se concatena
error.classList.remove('error'); //Borrar error de error paco

let parrass = document.getElementsByTagName('p');
let hijo = parrass[2];
let padre = hijo.parentNode;
console.log(padre);
let primerHermano = padre.firstElementChild;
console.log(primerHermano);
let proximoHermano = hijo.nextElementSibling;
console.log(proximoHermano);




//14/11/2023
//EVENTS --> acciones de la pagina web --> click, cambiar tamaño, hover(mover raton), acciones con el teclado, etc
//Referenciamos el elemento del DOM.
const par = document.querySelector('p');
//Cresmos un evento para este elemento
par.addEventListener('click', (e) => {
    //escribeLog()
    console.log(e.target);
    console.log(e.target.innerText);
    e.target.innerText = "Texto cambiado";
    console.log(e.target.innerText);
});
//par.addEventListener('click', escribeLog)
// par.addEventListener('mouseover', () => {
//         console.log('He pasado por encima del primer parrafo');
// });

function escribeLog(){
    console.log("He hecho clic sobre el primer parrafo");
}

document.addEventListener('keydown', (e) => {
        console.log('Tecla presionada: ' + e.key);
})