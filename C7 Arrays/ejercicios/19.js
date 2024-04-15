function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
  // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
  // [PISTA]: "arguments" es un arreglo.
  // Tu código:
  var numeroDeArgumentos = arguments.length;
  if (numeroDeArgumentos === 0) { 
    return 0;
  }
  if (numeroDeArgumentos === 1) {
    return arguments[0] // devolver el argumento en indice 0
  }
  if (numeroDeArgumentos > 0) {
    var multiplicar = 1;
    for (let i=0; i<arguments.length;i++){
    multiplicar *= arguments[i];}
  }
  return multiplicar
}
console.log(multiplicarArgumentos(20))
module.exports = multiplicarArgumentos;