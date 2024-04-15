var libro = {autor: "Marechal", genero: "drama", año: "1960"};
var tienePropiedadONo = libro.hasOwnProperty ("autor");
// console.log(tienePropiedadONo);

var todosLasPropiedades = Object.keys(libro)
console.log(todosLasPropiedades);
