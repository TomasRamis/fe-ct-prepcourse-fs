function obtenerLargoDelArray(array) {
  // Retornar la longitud del arreglo recibido.
  // Tu código:
  var largoArray = array.length;
  if (largoArray > 0 ) {
    return largoArray;
  }
  return undefined
}
console.log(obtenerLargoDelArray(["1","2","3","4"]))
module.exports = obtenerLargoDelArray;
