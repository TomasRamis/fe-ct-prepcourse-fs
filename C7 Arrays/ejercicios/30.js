function encontrarElementoRepetido(numeros) {
  // La función recibe un argumento "numeros" que es un array de números.
  // Retorna el primer elemento repetido que se encuentre en el array.
  // Tu código:
  var numerosRepetidos = {};
  for (i=0;i<numeros.length;i++) {
    var numero = numeros[i];
    if (numerosRepetidos[numero]) {
      console.log(numerosRepetidos);
      return numero;
    }
    else {numerosRepetidos[numero] = true;
  }
}}
console.log(encontrarElementoRepetido([1,2,3,4,5,2,6,7,3,8,9,1]));
module.exports = encontrarElementoRepetido;