function devolverPrimerElemento(array) {
  // Retornar el primer elemento del arreglo recibido.
  // Tu código:
if (array.length > 0)  {
  return array[0];
  } else {
  return undefined;
  }
}
console.log(devolverPrimerElemento(["perro","gato"]))
module.exports = devolverPrimerElemento;
