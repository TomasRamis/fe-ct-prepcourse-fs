function contarParesConContinue(numeros) {
  // La función recibe un array de numeros por argumento.
  // Devuelve la cantidad de números pares que hay en el array.
  // Evita los impares utilizando continue.
  // Tu código:
  var arrayPares = [];
  for (i=0;i<numeros.length;i++) {
    if (numeros[i]%2!==0) {continue;}
    arrayPares.push(numeros[i]);
  }
  return arrayPares;
}
console.log(contarParesConContinue([1,2,3,4,5,6,7,8,9,10,11,13,15]))
module.exports = contarParesConContinue;
