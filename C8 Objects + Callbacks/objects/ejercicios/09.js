function nuevoUsuario(nombre, email, password) {
  // Debes crear un nuevo objeto.
  // Este debe tener las propiedades: "nombre", "email" y "password" con sus respectivos valores.
  // Retorna el objeto creado.
  // Tu código:
  var usuario = {nombre: nombre, email: email, password: password, raza: function() {return "Es Negro!";}};
  return usuario;
}
var elUsuario = nuevoUsuario ("Pedro","rosquetaGolden@gmail.com","ahReQue");
console.log(elUsuario);
console.log(elUsuario.raza());
module.exports = nuevoUsuario;
