function encontrarIndiceMayor(array) {
  // Encuentra el índice del número más grande en el array de números.
  // Devuelve el valor de este índice.
  // Tu código:
 
  let numeroMaximo = Math.max(...array); //(...) es una operacion de propagacion, desgloza el array en todos sus elementos en comas
  return numeroMaximo;
  
}
console.log(encontrarIndiceMayor([1,2,3,4,5,6,75]))
module.exports = encontrarIndiceMayor;
