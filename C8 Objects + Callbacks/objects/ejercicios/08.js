function crearGato(nombre, edad) {
  // Debes crear un nuevo objeto con las propiedades "nombre" y "edad".
  // Ambas propiedades deben tener el valor correspondiente recibido por parámetro.
  // Además, agregar una propiedad con el nombre "meow".
  // La propiedad "meow" será una función que retorne el string: "Meow!".
  // Retornar el objeto.
  // Tu código:
  var  gato = {nombre: nombre, edad: edad, meow: function() {return "Meow!";}};
  return gato;
}
var miGato = crearGato("Nimbus",3);
console.log(crearGato("Nimbus",3))
module.exports = crearGato;
console.log(miGato.meow());