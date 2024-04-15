function ordenarArray(array) {
  // Ordena los elementos del areglo array de menor a mayor.
  // Devuelve el arreglo resultante.
  // Tu código:
  return array.sort(function(a, b) {
    return b - a;
  });
}

module.exports = ordenarArray;
console.log(ordenarArray([1,5,7,1,4,3,6,8,2,1,8]))