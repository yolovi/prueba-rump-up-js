
// EJERCICIO 2
// Diseña un algoritmo que imprima los números impares entre un número dado por el usuario y los siguientes 50 números

/* MI EJERCICIO CON ERRORES
Error 1: doy por hecho que el numero dado por usuario es un array. 
Error 2: Ademas no doy opcion a que el usuario pueda ingresar el numero (mediante prompt)
Error 3: no he resuelto la segunda parte del ejercicio ( imprimir los siguientes 50 números después del número dado por el usuario.)
*/

const numUsuario = [1, 2, 3, 4, 5];

function numImpares(arrNum) {
  for (let i = 0; i < arrNum.length; i++) {
    if (arrNum[i] % 2 !== 0) {
      console.log(arrNum[i]);
    }
  }
}

numImpares(numUsuario);



// Entregad vuestra solución por classroom. Si os da tiempo, pensad varias maneras de resolverlo y enviad vuestras soluciones. Podéis enviar una primera solución y luego añadir otras en comentarios.

// CORREGIDO:


function numImpares2(numInicial) {
  for (let i = numInicial; i <= numInicial + 50; i++) {
    if (i % 2 !== 0) {
      console.log(i);
    }
  }
}

const numUsuario2 = parseInt(prompt("Ingrese un número:"));
numImpares2(numUsuario2);

// En las correcciones realizadas:

// Se cambió la declaración de numUsuario de un array [1, 2, 3, 4, 5] a un número que será ingresado por el usuario mediante prompt.
// Se ajustó la función numImpares para recibir un número numInicial en lugar de un array. Este número será el punto de partida para imprimir los números impares.
// En el bucle for, ahora se inicia en numInicial y se ejecuta hasta numInicial + 50 para imprimir los siguientes 50 números después del número dado por el usuario.
// Se corrigió la condición en el if para verificar si cada número (i) es impar (i % 2 !== 0).
// Se utilizó console.log(i) para imprimir cada número impar encontrado dentro del bucle.
// Con estas correcciones, el programa solicitará al usuario ingresar un número y luego imprimirá los números impares a partir de ese número y los siguientes 50 números.
