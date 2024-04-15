function verificarPassword(objetoUsuario, password) {
  // Verifica si la propiedad "password" del "objetoUsuario" coincide con el parámetro "password".
  // En ese caso, retorna true. Caso contrario, false.
  // Tu código:
  if (objetoUsuario.hasOwnProperty("password")) {
    if (objetoUsuario.password === password) {
      return true;
      }
      else {return false;}

  }else {return false;}
}
var usuari1 = {username: "ReQuete", password: "1234"}
module.exports = verificarPassword;
console.log(verificarPassword(usuari1, "1234"));
console.log(verificarPassword(usuari1, "12345"));
console.log(usuari1.password);