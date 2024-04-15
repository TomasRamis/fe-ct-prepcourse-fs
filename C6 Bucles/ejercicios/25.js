function esPalindromo(string) {
   // La función recibe un argumento "string".
   // Verifica si este string es palíndromo o no.
   // Retorna true si lo es, caso contrario, retorna false.
   // IMPORTANTE: Un palíndromo es una palabra o frase
   // que se lee igual hacia adelante que hacia atrás.
   // Tu código:
   //if (string === string.split("").reverse().join("")) {
   //return true}
   //else {return false};
  
  var palabra = string.replace(/ /g,"").toLowerCase();
  var j = string.length -1;
    console.log(string.length)
    console.log(palabra.length)
   for(var i= 0;i<string.length;i++){
      if (palabra[i] !== palabra[j]) return false
      j--
   }
  return true
  }
esPalindromo("La ruta nos aporto otro paso natural");
module.exports = esPalindromo;
console.log(esPalindromo("teneT"))