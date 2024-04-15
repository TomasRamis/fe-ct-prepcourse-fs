function obtenerElementoAleatorio(array) {
   // Devuelve un elemento aleatorio del arreglo array.
   // PISTA: Usa el método Math.random().
   // Tu código:
   let max = array.length
   let min = 0;
   let numeroAleatorio = Math.floor(Math.random() * (max - min)) + min; 
   return array[numeroAleatorio];
}

   console.log(obtenerElementoAleatorio([11,123,435,56,65,76,87]))
module.exports = obtenerElementoAleatorio;
