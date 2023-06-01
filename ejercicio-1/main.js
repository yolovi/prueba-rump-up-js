
// EJERCICIO 1
// Diseña un algoritmo que cuente las veces que aparece una determinada letra en una frase

const miFrase = "Este es el primer ejercicio";

totalLetra = 0;

function buscaLetra(letra, frase) {
  let toLowFrase = frase.toLowerCase();

  for (let i = 0; i < toLowFrase.length; i++) {
    if (letra === toLowFrase[i]) {
      totalLetra += 1;
    }
  }
}

buscaLetra("e", miFrase);
console.log(totalLetra);

// Ejercicio 2:
// Diseña un algoritmo que imprima los números impares entre un número dado por el usuario y los siguientes 50 números

// Entregad vuestra solución por classroom. Si os da tiempo, pensad varias maneras de resolverlo y enviad vuestras soluciones. Podéis enviar una primera solución y luego añadir otras en comentarios.
