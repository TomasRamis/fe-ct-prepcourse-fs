function encontrarNumeroFaltante(numeros) {
  // La función recibe un argumento "numeros" correspondiente a un array de números.
  // Encuentra el número faltante en una secuencia de números enteros consecutivos
  // y retórnalo.
  // Devuelve null si el aray es vacío o si no hay números faltantes.
  // Tu código:
  if (numeros.length === 0) {
    return null;
  }
  var SumaTotal = ((numeros.length+1)*(numeros.length+2))/2;
  var SumaReal = 0;
  for (i=0;i<numeros.length;i++) {
    SumaReal += numeros[i];
  var numeroFaltante = SumaTotal-SumaReal;
  }
  return numeroFaltante
}
console.log(encontrarNumeroFaltante([1,2,3,5,6]))
module.exports = encontrarNumeroFaltante;