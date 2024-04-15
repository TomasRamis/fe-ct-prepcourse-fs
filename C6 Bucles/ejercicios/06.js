function tieneTresDigitos(num) {
  // Si el número recibido tiene tres dígitos, retorna true.
  // Caso contrario, retorna false.
  // Tu código:
  var longitud = num.toString().length;
  if (longitud === 3) {
    return true;}
  else {
    return false;
  }
}

module.exports = tieneTresDigitos;
console.log(tieneTresDigitos("321"))
console.log(tieneTresDigitos("1234"))