function esFechaValida(fecha) {
  // La función recibe un argumento "fecha".
  // Comprueba si este corresponde a una fecha válida.
  // Si es así, retorna true, sino retorna false.
  // Tu código:
return !isNaN(Date.parse(fecha));}
console.log(esFechaValida('2023-03-27'));
module.exports = esFechaValida;