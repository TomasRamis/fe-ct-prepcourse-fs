function tieneEmail(objetoUsuario) {
  // Verifica si el "objetoUsuario", en su propiedad "email", posee un valor definido.
  // En ese caso, retorna true. Caso contrario, false.
  // Tu código:
  if (objetoUsuario.email !== undefined)  // 
  return true;
  else return false;
  
}
var usuarioConEmail = { email: "ahReQueTengoEmail@gmail.com"};
var usuarioSinEmail = { nombre: "Retortuño", edad: 145};

module.exports = tieneEmail;
console.log(tieneEmail(usuarioConEmail));
console.log(tieneEmail(usuarioSinEmail));