// Recuperar los elementos del DOM que nos intresan
// const boton = document.querySelector('button');
// const envoltorio = document.querySelector('.envoltorio-popup');
// const cerrar = document.querySelector('.cerrar-popup');

const boton = document.getElementsByTagName('button');
const envoltorio = document.getElementsByClassName('envoltorio-popup');
const cerrar = document.getElementsByClassName('cerrar-popup');


//EVENTOS
// 1.- click sobre el boton para mostrar popup
boton.addEventListener('click', () => {
    envoltorio.style.display = 'block';
});/*
boton.addEventListener('click', () => {
    envoltorio.style.display = "block";
});*/

// 2.- click sobre el boton de cerrar envoltrio
cerrar.addEventListener('click', () => {
    envoltorio.style.display = "none";
});

// 3.-click sobre envoltorio del popup
envoltorio.addEventListener('click', () => {
    envoltorio.style.display = "none";
});