/*Ejercicio 1
Crear un array llamado meses y que almacene el nombre de los doce 
meses del año. Mostrar por pantalla los doce nombres utilizando la 
función console.log().*/

meses = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto",
"Septiembre","Octubre","Noviembre","Diciembre"];
console.log(meses);

/*EJERCIO 2
Determinar cual de los dos elementos de texto es mayor
2. Utilizando exclusivamente los dos valores booleanos del array, 
determinar los operadores necesarios para obtener un resultado 
true y otro resultado false
3. Determinar el resultado de las cinco operaciones matemáticas 
realizadas con los dos elementos numéricos
*/
var valores = [true, 5, false, "hola", "adios", 2];
var Valores2 = valores.filter((elemento) => {
    return typeof(elemento) === 'string';
});

var mayor;

Valores2.forEach((elemento) => {
    if (!mayor || elemento.length > mayor.length) {
        mayor = elemento;
    }
});

console.log("El texto mayor es:", mayor);

var resultadoTrue = valores[0] || valores[2]; // true || false = true
var resultadoFalse = valores[0] && valores[2]; // true && false = false

var numero1 = valores[1];
var numero2 = valores[5];

var suma = numero1 + numero2; // 7
var resta = numero1 - numero2; // 3
var multiplicacion = numero1 * numero2; // 10
var division = numero1 / numero2; // 2.5
var modulo = numero1 % numero2; // 1

console.log("Resultado True:", resultadoTrue);
console.log("Resultado False:", resultadoFalse);
console.log("Suma:", suma);
console.log("Resta:", resta);
console.log("Multiplicación:", multiplicacion);
console.log("División:", division);
console.log("Módulo:", modulo);

/*EJERCICIO 3
Completar las condiciones de los if del siguiente script para que los 
mensajes se muestren siempre de forma correcta:
*/

var numero1 = 5;
var numero2 = 8;

if (numero1 > numero2) {
    console.log("numero1 es mayor que numero2");
} else {
    console.log("numero1 no es mayor que numero2");
}

if (numero2 > 0) {
    console.log("numero2 es positivo");
} else {
    console.log("numero2 no es positivo");
}

if (numero1 < 0 || numero1 !== 0) {
    console.log("numero1 es negativo o distinto de cero");
} else {
    console.log("numero1 es positivo y igual a cero");
}

if (numero1 + 1 <= numero2) {
    console.log("Incrementar en 1 unidad el valor de numero1 lo hace mayor o igual que numero2");
} else {
    console.log("Incrementar en 1 unidad el valor de numero1 no lo hace mayor o igual que numero2");
}

/*
EJERCICIO 4
El factorial de un número entero n es una operación matemática que 
consiste en multiplicar todos los factores n x (n-1) x (n-2) x ... x 1. 
Así, el factorial de 5 (escrito como 5!) es igual a: 5! = 5 x 4 x 3 x 2 x
1 = 120
*/

function calcularFactorial(n) {
    if (n < 0) {
        return "No se puede calcular el factorial de un número negativo.";
    } else if (n === 0 || n === 1) {
        return 1;
    } else {
        var factorial = 1;
        for (var i = n; i >= 2; i--) {
            factorial *= i;
        }
        return factorial;
    }
}

var numero = 5;
var factorialResultado = calcularFactorial(numero);
console.log("El factorial de " + numero + " es: " + factorialResultado);


/*
EJERCICIO 5
Escribir el código de una función a la que se pasa como parámetro un 
número entero y devuelve como resultado una cadena de texto que 
indica si el número es par o impar. Mostrar por pantalla el resultado 
devuelto por la función. La función es llamada mediante un botón y 
pasarle el parámetro.
*/
function determinarParImpar() {
    var numero = parseInt(document.getElementById("numeroInput").value);

    if (isNaN(numero)) {
        document.getElementById("resultado").textContent = "Por favor, ingresa un número válido.";
    } else {
        var resultado = esPar(numero) ? "par" : "impar";
        document.getElementById("resultado").textContent = "El número es " + resultado + ".";
    }
}

function esPar(numero) {
    return numero % 2 === 0;
}

/*
Ejercicio 6
Definir una función que muestre información sobre una cadena de texto 
que se le pasa como argumento. A partir de la cadena que se le pasa, la 
función determina si esa cadena está formada sólo por mayúsculas, sólo 
por minúsculas o por una mezcla de ambas
*/

function analizarCadena(cadena) {
    if (cadena === cadena.toUpperCase()) {
        return "La cadena está formada solo por mayúsculas.";
    } else if (cadena === cadena.toLowerCase()) {
        return "La cadena está formada solo por minúsculas.";
    } else {
        return "La cadena es una mezcla de mayúsculas y minúsculas.";
    }
}

var texto = "Wazup Men";
var resultado = analizarCadena(texto);
console.log(resultado);
