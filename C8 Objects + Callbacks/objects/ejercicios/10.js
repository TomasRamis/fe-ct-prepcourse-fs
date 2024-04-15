function agregarPropiedad(objeto, propiedad) {
  // Recibirás un objeto por parámetro.
  // Debes agregarle una propiedad con el nombre recibido por parámetro.
  // Esta propiedad será igual al valor `null`.
  // Retornar el objeto.
  // Tu código:
objeto[propiedad] = null; //  var objeto = {propiedad: null}; este redefiniria
// un nuevo objeto 
return objeto;
}
console.log(agregarPropiedad("Perro", "color"));
module.exports = agregarPropiedad;
