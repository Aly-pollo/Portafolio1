// script.js
console.log("El archivo JavaScript está conectado correctamente.");

///* Sonrisa

function cambiarAvatar(){
    document.querySelector('#avataraly img').src = "assets/imagenes/avatar22.png";
}

function regresarAvatar(){
    document.querySelector('#avataraly img').src = "assets/imagenes/avatar2.png";
}


///* H3

function cambiodeFondo(element) {
    element.style.backgroundColor = '#ff00cc'; 
    element.style.color = 'white'; 
}

function restaurarFondo(element) {
    element.style.backgroundColor = ''; 
    element.style.color = '';
}
