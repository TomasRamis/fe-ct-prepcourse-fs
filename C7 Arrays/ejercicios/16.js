function multiplicarElementosPorIndice(array) {
  // Multiplica cada elemento del array por su índice.
  // Devuelve el nuevo arreglo con los resultados.
  // Tu código:
  var indices= []; //crea un array vacio
  for (let i=0; i<array.length;i++) {
    indices.push(i);
  }
  return array.map((num, index) =>{
    return num * indices[index];
  });

}
console.log(multiplicarElementosPorIndice([1,2,3,4,5,6,7,8]))
module.exports = multiplicarElementosPorIndice;
