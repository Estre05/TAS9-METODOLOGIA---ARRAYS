"Use strict";

//Escribir una funcion que escriba un array de strigs y muestre cada elemento con su posicion

function Posicion(array) {
    for (let i = 0; i < 5; i++) {
        alert("Elemento en la posición " + i + " es: " + array[i]);
    }
}

let color = ["rojo", "azul", "amarillo", "cafe", "morado"];
Posicion(color);


//Escribir una funcion que reciba un array de numeros y devuelva la suma de todos los elementos
function suma(array) {
    let suma = 0;
    for (let i = 0; i < 5; i++) {
        suma += array[i];
    }
    return suma;
}

let numeros = [2, 4, 6, 8, 10];
alert("La suma de todos los elementos es: " + suma(numeros));


//Escribir una funcion que reciba una array de numeros y muestre cada uno de sus elementos multiplicado por 3
function Multiplicar3(array) {
    for (let i = 0; i < 5; i++) {
        alert("Elemento " + array[i] + " multiplicado por 3 es: " + (array[i] * 3));
    }
}

let Multiplicar = [3, 6, 9, 12, 15];
Multiplicar3(Multiplicar);


