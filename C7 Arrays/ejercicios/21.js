function mesesDelAño(array) {
  // El array contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
  // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
  // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
  // Tu código:
  var mesesSeleccionados = [];
  var stringsABsucar = ["Enero","Marzo","Noviembre"];
  for (let mes of stringsABsucar) {
    if (array.includes(mes)) {
      mesesSeleccionados.push(mes);
    } else {
      return "No se encontraron los meses pedidos";
    }
  }
  return mesesSeleccionados
}

module.exports = mesesDelAño;
console.log(mesesDelAño(["Abril", "Enero", "Febrero", "Marzo", "Mayo", "Junio", "Noviembre"]));