function contarElementosMayoresA10(array) {
  // Cuenta y devuelve la cantidad de elementos mayores a 10 en el array de números.
  // Tu código:
  return array.filter((num) => {
    return num > 10;
  });
}
console.log(contarElementosMayoresA10([2,3,6,99,2,33,34,45,56,1,32,4,3,54,6]))
module.exports = contarElementosMayoresA10;
