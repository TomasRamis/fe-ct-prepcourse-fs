function agregarItemAlFinalDelArray(array, elemento) {
  // Agrega el "elemento" al final del arreglo recibido.
  // Retorna el arreglo.
  // Tu código:
 array.push(elemento);
 return array;
}

module.exports = agregarItemAlFinalDelArray;
console.log(agregarItemAlFinalDelArray(["perro"], "casa"))