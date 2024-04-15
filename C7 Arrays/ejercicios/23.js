function breakStatement(num) {
  // Iterar en un bucle aumentando en 2 el número num recibido hasta un límite de 10 veces.
  // Guardar cada nuevo valor en un arreglo y retórnarlo.
  // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse
  // la ejecución y retornar el string: "Se interrumpió la ejecución".
  // PISTA: Utiliza el statement 'break'.
  // Tu código:
  var i = 0;
  var arrayAumentadoEnDos = [];
  while (i<10) {num+=2;  // se puede hacer con el for: for (var i = 0; i < 10; i++) { num += 2; arrayAumentadoEnDos.push(num);
    arrayAumentadoEnDos.push(num);
    if (i === num+2) { 
    return "Se interrumpió la ejecución";}
    i++;
  }
  return arrayAumentadoEnDos;
}

module.exports = breakStatement;
console.log(breakStatement(1));