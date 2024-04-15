function promedioResultadosTest(resultadosTest) {
  // Itera sobre los elementos del arreglo resultadosTest y devuelve el promedio de las notas.
  // Tu código:
  var sumaArray = 0; //crea un array vacio
  for (let i=0; i<resultadosTest.length;i++) { //esto es un bucle de incrementacion del valor de i
    sumaArray += resultadosTest[i];} // esto suma los valores de resultadosTest siguiendo los indices que i va marcando
  var promedio = sumaArray / resultadosTest.length;
  return promedio;
}
console.log(promedioResultadosTest([1,2,3,4,56,7]))
module.exports = promedioResultadosTest;
