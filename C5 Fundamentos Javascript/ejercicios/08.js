function esNumeroEntero(numero) {
  // Verificamos si el número es entero o no
  if (numero % 1 === 0) {
    return true; // Devuelve true si es un número entero
  } else {
    return false; // Devuelve false si no es un número entero
  }
}



// Imprimimos el resultado
console.log(esNumeroEntero(17)); // Debería imprimir true