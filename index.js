import validator from './validator.js';

const buttonValidate = document.getElementById("iValidate");
const inputCardNumber = document.getElementById("iCardNumber");
const inputCardName = document.getElementById("iCardName");
const inputCVV = document.getElementById("iCardCVV");
const buttonGuardar = document.getElementById("iGuardar");
const inputNombreUsuario = document.getElementById("iNombreUsuario");
const inputEmail = document.getElementById("iEmail");

buttonValidate.addEventListener("click", validar);
buttonGuardar.addEventListener("click", showAlertInputsGuardar);

inputCardName.addEventListener("input", checkIfEnableButton);
inputCardNumber.addEventListener("input", checkIfEnableButton);
inputCVV.addEventListener("input", checkIfEnableButton);
inputCardNumber.addEventListener("keypress", validate);
inputNombreUsuario.addEventListener("input", checkIfEnableButtonGuardar);
inputEmail.addEventListener("input", checkIfEnableButtonGuardar);


function validar() {
    if (validator.isValid(inputCardNumber.value)) {
        const maskifyCardNumber = validator.maskify(inputCardNumber.value);
        inputCardNumber.value = maskifyCardNumber;
        alert("Muchas gracias por tu donación");
    } else {
        alert("Ingrese un nro de tarjeta valida");
    }
}

function checkIfEnableButton() {
    if (inputCardNumber.value.trim().length != 0 && // trim() - remueve espacios vacíos
        inputCardName.value.trim().length != 0 &&
        inputCVV.value.trim().length == 3) {
        buttonValidate.disabled = false;
    } else {
        buttonValidate.disabled = true;
    }
}

function validate(evt) { // para aceptar solo números
    var theEvent = evt || window.event;

    // Handle paste
    if (theEvent.type === 'paste') {
        key = event.clipboardData.getData('text/plain');
    } else {
        // Handle key press
        var key = theEvent.keyCode || theEvent.which;
        key = String.fromCharCode(key);
    }
    var regex = /[0-9]|\./;
    if (!regex.test(key)) {
        theEvent.returnValue = false;
        if (theEvent.preventDefault) theEvent.preventDefault();
    }
}

function checkIfEnableButtonGuardar() {
    if (inputNombreUsuario.value.trim().length != 0 &&
        inputEmail.value.trim().length != 0) {
        buttonGuardar.disabled = false;
    } else {
        buttonGuardar.disabled = true;
    }
}

function showAlertInputsGuardar() {
    alert("Bienvenida, " + inputNombreUsuario.value + ". Click en OK para continuar.");
    inputNombreUsuario.value = "";
    inputEmail.value = "";
}
