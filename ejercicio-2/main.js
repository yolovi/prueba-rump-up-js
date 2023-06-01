
// EJERCICIO 2
// Diseña un algoritmo que imprima los números impares entre un número dado por el usuario y los siguientes 50 números

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
