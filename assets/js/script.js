nombre = prompt("Ingrese su nombre");
nom = document.querySelector('#nombre');
nom.innerHTML = nombre;
renta = parseFloat(prompt("Ingrese su renta"));
sueldo = document.querySelector('#renta');
sueldo.innerHTML = renta.toLocaleString();


function calcular() {
    sueldo = document.querySelector('#renta');
    sueldo.innerHTML = renta;
    var contrato;

    if (document.getElementById("rhonorario").checked) {
        contrato = "HONORARIO";
    } else if (document.getElementById("rplazo").checked) {
        contrato = "PLAZO FIJO / INDEFINIDO";
    } else {
        alert("Por favor, seleccione un tipo de contrato.");
        return;
    }
    if (contrato === "HONORARIO") {
        total = renta * 0.9;
    } else {
        total = renta * 0.8;
    }
    resultado = document.querySelector('#total');
    resultado.innerHTML = total.toLocaleString();
}
function limpiar() {
    document.querySelector('#nombre').textContent = "";
    document.querySelector('#renta').textContent = "";
    document.getElementById("rhonorario").checked = false;
    document.getElementById("rplazo").checked = false;
    document.querySelector('#total').textContent = "";

}
function nuevocalculo() {
    limpiar();
    nombre = prompt("Ingrese su nombre");
    nom = document.querySelector('#nombre');
    nom.innerHTML = nombre;
    renta = parseFloat(prompt("Ingrese su renta"));
    sueldo = document.querySelector('#renta');
    sueldo.innerHTML = renta.toLocaleString();
    calcular();
    

}