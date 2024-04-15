function encontrarElemento(num, array) {
   // Busca el número pasado por argumento dentro del array.
   // Si lo encuentras debes retornar el INDICE en el que se encuentra dentro del array.
   // Si no se encuentra, retorna -1.
   // Tu código:
   let indice = -1
   array.forEach((elemento, index) => {
      if (elemento === num) {
         indice = index;
      }
});
return indice;
}
module.exports = encontrarElemento;
console.log(encontrarElemento(3,[1,2,3,4,5,6,7]))