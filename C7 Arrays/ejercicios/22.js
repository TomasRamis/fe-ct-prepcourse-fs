function tablaDelSeis() {
  // Devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
  // Desde 0 al 60.
  // Tu código:
  let numeros = Array.from({length: 61 }, (_,index) => index);
  let tablaDelSeis = numeros.map (num => num * 6);
  return tablaDelSeis;
}

module.exports = tablaDelSeis;
console.log(tablaDelSeis());