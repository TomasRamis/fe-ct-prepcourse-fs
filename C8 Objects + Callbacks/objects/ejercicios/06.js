const contarPropiedades = (objeto) => {
  // Cuenta y retorna el total de propiedades que tiene el objeto.
  // PISTA: Puedes iterarlo usando el bucle for-in.
  // Tu código:
  let contador = 0
  for(let cachengue in objeto) { 
  if (objeto.hasOwnProperty(cachengue)) {
    contador++;
  }
  }
  return contador;
};

module.exports = contarPropiedades;
const objetoEjemplo = { propiedad1: "valor1", propiedad2: "valor2", propiedad3: "valor3" };
console.log(contarPropiedades(objetoEjemplo)); // Salida esperada: 3