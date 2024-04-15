function agregarAmigo(objetoUsuario, nuevoAmigo) {
  // El parámetro "objetoUsuario" tiene una propiedad llamada "amigos" igual a un arreglo.
  // Debes agregar el "nuevoAmigo" al final de este arreglo.
  // Retornar el objeto.
  // Tu código:
  objetoUsuario["amigos"].push(nuevoAmigo); // objet..["amigos"] es el acceso a la propiedad del objeto
  return objetoUsuario; 
}

module.exports = agregarAmigo;
