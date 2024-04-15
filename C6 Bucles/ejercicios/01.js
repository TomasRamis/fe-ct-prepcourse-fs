function esIgualYNegativo(a, b) {
  // La función recibe dos argumentos "a" y "b" que son números.
  // Determina si son iguales y son ambos negativos.
  // De ser así, retorna true, de lo contrario, retorna false.
  // Tu código:
  if(a===b && a<0 && b<0) console.log(true);
  else console.log(false);
}
esIgualYNegativo(-2,-3)
esIgualYNegativo(-5,-5)
esIgualYNegativo(100,1)
esIgualYNegativo(5,5)
esIgualYNegativo(-100,1)
module.exports = esIgualYNegativo;
