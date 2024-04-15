function tienePropiedad(objeto, propiedad) {
  // Verifica si el objeto recibido posee una propiedad con el mismo nombre que el parámetro "propiedad".
  // En ese caso, retorna true. Caso contrario, false.
  // Tu código:
  if (objeto.hasOwnProperty(propiedad))
  return true;
else
return false;
}

module.exports = tienePropiedad;
var objeto = { nombre: "Juan", edad: 30 };
var resultado = tienePropiedad(objeto, "edad"); //hacemos pasar por la funcion estas variables y la hacemos andar
console.log(resultado); // Debería imprimir false