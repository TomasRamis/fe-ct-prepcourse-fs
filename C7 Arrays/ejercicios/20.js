function todosIguales(array) {
  // Si todos los elementos del arreglo son iguales, retornar true.
  // Caso contrario, retornar false.
  // Tu código:
  var sumaDeArrays = 0;
  var numeroDeArrays = array.length;
  for(let i=0;i<array.length;i++) {
    sumaDeArrays += array[i];
  }
  if (array[0]*numeroDeArrays === sumaDeArrays) {
    return true;
  } else {
    return false;
  }
  }
module.exports = todosIguales;
console.log(todosIguales([1,1,1,1,1,1]))
