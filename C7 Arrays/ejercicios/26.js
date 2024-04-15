function encontrarPrimerMultiploDeN(n, secuencia) {
  // La función recibe un numero "n" y un array de números "secuencia" como argumentos.
  // Devuelve el primer múltiplo de n que encuentres en la secuencia de números.
  // Usa un break para detener el bucle una vez halles el múltiplo.
  // Tu código:
  for (i=0;i<secuencia.length;i++) {
    if (secuencia[i]%n===0) {break;}
    
  }
  return secuencia[i] || null;
}
console.log(encontrarPrimerMultiploDeN(5,[4,7,8,,13,41]))
module.exports = encontrarPrimerMultiploDeN;