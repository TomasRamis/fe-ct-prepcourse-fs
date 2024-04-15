function filtrarNumerosPares(array) {
  // Devuelve un arreglo solo con los números pares presentes en el array.
  // Tu código:
  return array.filter((num) => {
    return num % 2 === 0;
      return num;
    }
  );
}
console.log(filtrarNumerosPares([2,3,4,5,6,7,8,9,10,11,12]))

module.exports = filtrarNumerosPares;
