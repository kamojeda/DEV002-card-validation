const validator = {
  // ...

  isValid: function validarTarjeta(myString) {
    if (myString.trim().length != 0) {
      let myArray = Array.from(myString).map(Number);
      invertirArreglo(myArray);
      duplicarIntercaladoUnDigito(myArray);
      return sumarArreglo(myArray) % 10 == 0;
    } else {
      return false;
    }
  },

  maskify(myString) {
    let myArray = [];
    for (let i = 0; i < myString.length; i++) {
      if (i < myString.length - 4) {
        myArray[i] = "#";
      } else {
        myArray[i] = myString[i];
      }
    }
    return myArray.join("");
  }
};

export default validator;

function reducirAUnDigito(nroDosDigitos) {

  while (nroDosDigitos >= 10) {
    let Residuo = nroDosDigitos % 10;
    let Decena = Math.floor(nroDosDigitos / 10);

    nroDosDigitos = (Residuo) + (Decena);

  }
  return (nroDosDigitos);
}

function invertirArreglo(myArray) {
  let i = 0;
  let newArray = [];
  let newLenght = myArray.length;
  while (i < myArray.length) {
    newArray[i] = myArray[newLenght - 1];
    newLenght--;
    i++;
  }
  return newArray;
}

function duplicarIntercaladoUnDigito(myArray) {
  let i = 1;
  while (i < myArray.length) {
    myArray[i] = reducirAUnDigito(myArray[i] * 2);
    i = i + 2;
  }
  return myArray;
}

function sumarArreglo(myArray) {
  let i = 0, suma = 0;
  while (i < myArray.length) {
    suma = suma + myArray[i];
    i = i + 1;
  }
  return suma;
}

/*console.log(unir([1,5,7,3,"u"]));
console.log(maskify("1234567890"));
console.log(maskify("79927398713"));
console.log(maskify("123"));
console.log(maskify("12345"));*/

/*let a=[1,2,3];
console.log(a);
a.reverse();
console.log(a);*/