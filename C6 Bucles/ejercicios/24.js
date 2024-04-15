function invertirTexto(texto) {
   // La función recibe un argumento "texto" que es un string.
   // Tu objetivo es invertir el string y devolver el string invertido.
   // Tu código:
   //return texto.split("").reverse().join("");
   
//}
//console.log(invertirTexto("TeneTdor"))
return texto.split("").reverse().join("");
}
module.exports = invertirTexto;
invertirTexto("hola mundo");
console.log(invertirTexto("hola mundo"));