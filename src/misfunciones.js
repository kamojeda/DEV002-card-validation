//Ejercicios objeto array
//let myArray = [3, 3, 2, 1, 1, 0, 2, 1, 9, 6, 8, 0, 4];
//let myArrayAsString = "3321102196804";
//let promedio = promediarArreglo(myArray);

/*function promediarArreglo(myArray) {
  let i = 0, suma = 0;
  while (i < myArray.length) {
    suma = suma + myArray[i];
    i = i + 1;
  }
  return suma / myArray.length;
}

function promediarArregloInvertido(myArray) {
  let i = myArray.length, suma = 0;
  while (i > 0) {
    i = i - 1;
    suma = suma + myArray[i];
  }
  return suma / myArray.length;
}

function nroMayor(myArray) {
  let esMayor = myArray[0], i = 1;
  while (i < myArray.length) {
    if (esMayor < myArray[i]) {
      esMayor = myArray[i];
    }
    i = i + 1;
  }
  return ("El nro  mayor es " + esMayor);
}

function nroMenor(myArray) {
  let esMenor = myArray[0], i = 1;
  while (i < myArray.length) {
    if (esMenor > myArray[i]) {
      esMenor = myArray[i];
    }
    i = i + 1;
  }
  return ("El nro  menor es " + esMenor);
}
function sumarPosicionImpares(myArray) {
  let i = 1, suma = 0;
  while (i < myArray.length && i % 2 !== 0) {
    suma = suma + myArray[i];
    i = i + 2
  }
  return (suma);
}

let nroDosDigitos = 9876;

function transformarArregloAUnDigito(myArray) {
    let newArray = [];
    let i = 0;
    while (i < myArray.length) {
      newArray[i] = reducirAUnDigito(myArray[i]);
      i = i + 1;
    }
    return newArray;
    return myArray.map(reducirAUnDigito);
  }

  function invertirArreglo2(myArray) {
    let i = myArray.length - 1;
    let newArray = [];
    while (i > 0) {
      newArray.push(myArray[i]);
      i--;
    }
    return newArray;
  }
  
  function duplicarIntercalado(myArray) {
    let i = 1;
    while (i < myArray.length) {
      myArray[i] = myArray[i] * 2;
      i = i + 2;
    }
    return myArray;
  }

  function unir(myArray) {
    let myString = "";
    for (let i = 0; i < myArray.length; i++) {
      myString = myString + myArray[i];
    }
    return myString;
  }*/
  //practicando JS
//Función cambiar de imagen con un click
/*let miImage=document.querySelector("img");

miImage.onclick=function(){
    let miSrc=miImage.getAttribute("src");
    if(miSrc==="imagenes/fondo.jpeg") {
        miImage.setAttribute("src","imagenes/fondo_1.jpeg");
    } else {
        miImage.setAttribute("src", "imagenes/fondo.jpeg");
    }
}*/

//Función saludo personalizado
/*let miBoton=document.querySelector("button");
let miTitulo=document.querySelector("h1");

function estableceNombreUsuario(){
    let miNombre=prompt("Introduzca su nombre.");
    if(!miNombre){
        estableceNombreUsuario();
    }else{
        localStorage.setItem("nombre",miNombre);
        miTitulo.innerHTML="Gracias por tu aporte, "+miNombre;
    }
}

if(!localStorage.getItem("nombre")){
    estableceNombreUsuario();
}
else{
    let nombreAlmacenado=localStorage.getItem("nombre");
    miTitulo.textContent="Gracias por tu aporte, " + nombreAlmacenado;
}

miBoton.onclick=function(){
    estableceNombreUsuario();
}*/