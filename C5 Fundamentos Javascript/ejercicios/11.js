function esMayorDeEdad(fechaNacimiento) {
  // Verificamos si fechaNacimiento es un objeto Date
  if (!(fechaNacimiento instanceof Date)) {
    throw new Error('El argumento proporcionado no es un objeto Date');
  }

  // Obtenemos el año actual
  var añoActual = new Date().getFullYear();

  // Obtenemos el año de nacimiento de la fecha de nacimiento proporcionada
  var añoNacimiento = fechaNacimiento.getFullYear();

  // Calculamos la edad restando el año actual menos el año de nacimiento
  var edad = añoActual - añoNacimiento;

  // Comprobamos si la edad es mayor o igual a 18
  if (edad >= 18) {
    return true; // La persona es mayor de edad
  } else {
    return false; // La persona no es mayor de edad
  }
}