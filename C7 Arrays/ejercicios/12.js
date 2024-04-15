function convertirStringAMayusculas(array) {
  // Convierte a mayúsculas todos los strings del array.
  // Retorna el arreglo resultante.
  // Tu código:
  return array.map((elemento) => {
    if (typeof elemento === "string") {
      return elemento.toUpperCase();
    } else {
      return elemento;
    }
  });
}
console.log(convertirStringAMayusculas(["pedorro","bonoAl30","juan","bolsa"]))
module.exports = convertirStringAMayusculas;
