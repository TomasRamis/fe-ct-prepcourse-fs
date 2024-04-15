function devolverUltimoElemento(array) {
  // Retornar el último elemento del arreglo recibido.
  // Tu código:
var ultimoArray = array.length;
if (array.length > 0) {
  return array[ultimoArray - 1];
}
return undefined;
}

module.exports = devolverUltimoElemento;
console.log(devolverUltimoElemento(["caja","circo","nube"]))