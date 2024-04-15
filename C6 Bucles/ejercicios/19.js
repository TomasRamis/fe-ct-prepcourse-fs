function sumarHastaN(n) {
  // La función recibe un número "n" por argumento.
  // Devuelve la suma de todos los números desde 1 hasta n.
  // Tu código:
  if (n<1) {
    return 0;
  }
  var suma = 1;
  for (var i = 2;i<=n;i++) {
    suma +=i;
  console.log(i)
  }
  return suma;
}
console.log(sumarHastaN(10))
module.exports = sumarHastaN;
