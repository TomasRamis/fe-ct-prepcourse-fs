function pasarUsuarioAPremium(objetoMuchosUsuarios) {
  // El parámetro "objetoMuchosUsuarios" es un arreglo de objetos (usuarios).
  // Cada usuario tiene una propiedad llamada "esPremium".
  // Define esta propiedad de todos los usuarios como true.
  // Retornar el arreglo.
  // Tu código:
  objetoMuchosUsuarios.forEach(function(usuarios) {
    usuarios["esPremium"] = true; });
  return objetoMuchosUsuarios;
}
let usuarios = [
  {nombre: "Pedro",esPremium:false},
  {nombre: "Lucia",esPremium:false},
  {nombre: "René",esPremium:true},
]
module.exports = pasarUsuarioAPremium;
console.log(pasarUsuarioAPremium(usuarios));